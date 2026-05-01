# frontend/Dockerfile

# Build phase
FROM node:22-alpine AS builder
WORKDIR /app

# Avoid upgrading npm globally in the build image (can fail on smaller/alpine images).
# Use `npm ci` for reproducible, deterministic installs based on package-lock.json.
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

COPY . .
RUN npm run build

# Production phase with NGINX
FROM nginx:alpine
# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Copy build files
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
