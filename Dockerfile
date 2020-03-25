# build stage
FROM node:latest as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# production stage
FROM caddy/caddy:builder AS builder
RUN caddy-builder
FROM caddy/caddy:latest
COPY --from=builder /usr/bin/caddy /usr/bin/caddy
COPY --from=build-stage /app/dist /usr/share/caddy
