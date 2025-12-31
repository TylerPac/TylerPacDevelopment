# frontend/Dockerfile

# Build phase
FROM node:lts-alpine AS builder
WORKDIR /app
COPY . .
RUN npm install -g npm@latest
RUN npm run build

# Production phase with NGINX
FROM nginx:alpine
# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Copy build files
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
