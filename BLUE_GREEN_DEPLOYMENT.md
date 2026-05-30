# Blue-Green Docker Deployment

This app uses nginx as the stable public entrypoint on port `3080`.
The Next.js app runs behind it as either `web-blue` or `web-green`.

## Environment

Set the production site URL before deployment so Next.js bakes the right public SEO URL into the build:

```bash
export NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Deploy

```bash
bun run deploy:blue-green
```

The script will:

1. Read the current active color from `deploy/active-color`.
2. Build and start the idle color.
3. Wait for `/api/hello` to return a healthy response.
4. Point nginx to the newly healthy color.
5. Reload nginx without restarting the proxy container.
6. Stop the previous color after a short drain delay.

## Useful Commands

```bash
docker compose -f docker-compose.blue-green.yml ps
docker compose -f docker-compose.blue-green.yml logs -f proxy
docker compose -f docker-compose.blue-green.yml logs -f web-blue
docker compose -f docker-compose.blue-green.yml logs -f web-green
```

## First Run

The first deployment defaults to switching traffic to `green`, because `deploy/active-color` starts as `blue`.
That is expected; the inactive color is just the next deploy target.
