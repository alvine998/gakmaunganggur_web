#!/usr/bin/env bash
set -euo pipefail

COMPOSE_FILE="${COMPOSE_FILE:-docker-compose.blue-green.yml}"
ACTIVE_FILE="${ACTIVE_FILE:-deploy/active-color}"
NGINX_TEMPLATE="${NGINX_TEMPLATE:-deploy/nginx/templates/app.conf.template}"
NGINX_CONF="${NGINX_CONF:-deploy/nginx/conf.d/app.conf}"
HEALTH_PATH="${HEALTH_PATH:-/api/hello}"
HEALTH_RETRIES="${HEALTH_RETRIES:-30}"
HEALTH_DELAY="${HEALTH_DELAY:-2}"
DRAIN_SECONDS="${DRAIN_SECONDS:-5}"
LEGACY_COMPOSE_FILE="${LEGACY_COMPOSE_FILE:-docker-compose.yml}"
LEGACY_SERVICE="${LEGACY_SERVICE:-web}"

stop_legacy_service_if_needed() {
  if [ ! -f "$LEGACY_COMPOSE_FILE" ]; then
    return
  fi

  local container_id
  container_id="$(docker compose -f "$LEGACY_COMPOSE_FILE" ps -q "$LEGACY_SERVICE" 2>/dev/null || true)"

  if [ -z "$container_id" ]; then
    return
  fi

  echo "Stopping legacy $LEGACY_SERVICE container that may still own port 3080..."
  docker compose -f "$LEGACY_COMPOSE_FILE" stop "$LEGACY_SERVICE" || true
  docker compose -f "$LEGACY_COMPOSE_FILE" rm -f "$LEGACY_SERVICE" || true
}

if [ -f "$ACTIVE_FILE" ]; then
  ACTIVE_COLOR="$(tr -d '[:space:]' < "$ACTIVE_FILE")"
else
  ACTIVE_COLOR="blue"
fi

if [ "$ACTIVE_COLOR" = "blue" ]; then
  NEXT_COLOR="green"
else
  NEXT_COLOR="blue"
fi

ACTIVE_SERVICE="web-$ACTIVE_COLOR"
NEXT_SERVICE="web-$NEXT_COLOR"

echo "Active color: $ACTIVE_COLOR"
echo "Deploying idle color: $NEXT_COLOR"

docker compose -f "$COMPOSE_FILE" up -d --build "$NEXT_SERVICE"

echo "Waiting for $NEXT_SERVICE health..."
for attempt in $(seq 1 "$HEALTH_RETRIES"); do
  if docker compose -f "$COMPOSE_FILE" exec -T "$NEXT_SERVICE" bun -e "fetch('http://127.0.0.1:3080${HEALTH_PATH}').then((response) => process.exit(response.ok ? 0 : 1)).catch(() => process.exit(1))"; then
    echo "$NEXT_SERVICE is healthy."
    break
  fi

  if [ "$attempt" = "$HEALTH_RETRIES" ]; then
    echo "$NEXT_SERVICE failed health check." >&2
    exit 1
  fi

  sleep "$HEALTH_DELAY"
done

sed "s/__ACTIVE_SERVICE__/$NEXT_SERVICE/g" "$NGINX_TEMPLATE" > "$NGINX_CONF"

if docker compose -f "$COMPOSE_FILE" ps --status running proxy | grep -q proxy; then
  docker compose -f "$COMPOSE_FILE" exec -T proxy nginx -t
  docker compose -f "$COMPOSE_FILE" exec -T proxy nginx -s reload
else
  stop_legacy_service_if_needed
  docker compose -f "$COMPOSE_FILE" up -d --remove-orphans proxy
fi

printf "%s\n" "$NEXT_COLOR" > "$ACTIVE_FILE"

echo "Traffic switched to $NEXT_COLOR."
echo "Waiting ${DRAIN_SECONDS}s before stopping previous color..."
sleep "$DRAIN_SECONDS"

echo "Stopping previous color: $ACTIVE_COLOR"
docker compose -f "$COMPOSE_FILE" stop "$ACTIVE_SERVICE" || true

echo "Blue-green deployment complete."
