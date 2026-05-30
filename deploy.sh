#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$ROOT_DIR"

ENV_FILE="${ENV_FILE:-}"
COMPOSE_FILE="${COMPOSE_FILE:-docker-compose.blue-green.yml}"
DEPLOY_SCRIPT="${DEPLOY_SCRIPT:-scripts/blue-green-deploy.sh}"

load_env_file() {
  local file="$1"

  if [ ! -f "$file" ]; then
    echo "Env file not found: $file" >&2
    exit 1
  fi

  set -a
  # shellcheck disable=SC1090
  source "$file"
  set +a
}

if [ -n "$ENV_FILE" ]; then
  load_env_file "$ENV_FILE"
elif [ -f ".env.production" ]; then
  load_env_file ".env.production"
elif [ -f ".env" ]; then
  load_env_file ".env"
fi

if ! command -v docker >/dev/null 2>&1; then
  echo "Docker is not installed or not available in PATH." >&2
  exit 1
fi

if ! docker compose version >/dev/null 2>&1; then
  echo "Docker Compose plugin is not available." >&2
  exit 1
fi

if [ ! -x "$DEPLOY_SCRIPT" ]; then
  echo "Deploy script is missing or not executable: $DEPLOY_SCRIPT" >&2
  exit 1
fi

if [ -z "${NEXT_PUBLIC_SITE_URL:-}" ]; then
  echo "NEXT_PUBLIC_SITE_URL is not set. Using docker-compose default value." >&2
fi

echo "Validating compose file: $COMPOSE_FILE"
docker compose -f "$COMPOSE_FILE" config >/dev/null

echo "Starting blue-green deployment..."
COMPOSE_FILE="$COMPOSE_FILE" "$DEPLOY_SCRIPT"
