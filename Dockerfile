# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Disable Next.js telemetry during build to save resources
ENV NEXT_TELEMETRY_DISABLED=1

# Limit Node.js memory for 1GB droplet (512MB build + 256MB overhead + 256MB OS)
ENV NODE_OPTIONS="--max-old-space-size=512"

# Accept build arguments for Next.js public env vars
ARG NEXT_PUBLIC_SITE_URL
ARG NEXT_PUBLIC_EMAIL
ARG NEXT_PUBLIC_GITHUB
ARG NEXT_PUBLIC_LINKEDIN

# Make them available during build
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL
ENV NEXT_PUBLIC_EMAIL=$NEXT_PUBLIC_EMAIL
ENV NEXT_PUBLIC_GITHUB=$NEXT_PUBLIC_GITHUB
ENV NEXT_PUBLIC_LINKEDIN=$NEXT_PUBLIC_LINKEDIN

COPY package*.json ./

# Use npm ci with cache cleaning to reduce memory footprint
RUN npm ci --prefer-offline --no-audit --progress=false && npm cache clean --force

COPY . .

RUN npm run build

# Production stage
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NODE_OPTIONS="--max-old-space-size=256"

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/messages ./messages
COPY --from=builder --chown=nextjs:nodejs /app/i18n ./i18n

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
