# src Dockerfile: https://github.com/vercel/turbo/blob/main/examples/with-docker/apps/web/Dockerfile
FROM node:20-alpine AS alpine

# setup pnpm on the alpine base
FROM alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ARG PNPM_VERSION=9.5.0
RUN corepack enable && corepack prepare pnpm@${PNPM_VERSION} --activate
RUN pnpm install turbo --global



FROM base AS builder
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY ../../web .
RUN turbo prune --scope=web --docker



FROM base AS installer
RUN apk add --no-cache libc6-compat python3 py3-pip make g++
WORKDIR /app
COPY .gitignore .gitignore
COPY turbo.json turbo.json
COPY --from=builder /app/out/full/ .
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=builder /app/out/pnpm-workspace.yaml ./pnpm-workspace.yaml
RUN pnpm install --frozen-lockfile
RUN turbo build --filter=web


# use alpine as the thinest image
FROM alpine AS runner
WORKDIR /app
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs
COPY --from=installer /app/apps/igshop/next.config.mjs .
COPY --from=installer /app/apps/igshop/package.json .

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=installer --chown=nextjs:nodejs /app/apps/web/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/apps/web/.next/static ./apps/web/.next/static
COPY --from=installer --chown=nextjs:nodejs /app/apps/web/public ./apps/web/public


CMD HOSTNAME="0.0.0.0" node apps/web/server.js