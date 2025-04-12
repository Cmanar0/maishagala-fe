# === Build Stage ===
FROM node:20-alpine AS builder

# Increase memory limit for Node.js to avoid out-of-memory during build
ENV NODE_OPTIONS=--max-old-space-size=1024

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

# === Serve Stage ===
FROM caddy:alpine

# Copy static built frontend into Caddy's serving directory
COPY --from=builder /app/dist /usr/share/caddy
