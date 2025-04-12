# === Build Stage ===
FROM node:20-alpine AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# === Serve Stage ===
FROM caddy:alpine
COPY --from=builder /app/dist /usr/share/caddy
