# Use official Node image
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source files
COPY . .

# Build production assets
RUN npm run build

# Production environment
FROM nginx:alpine

# Install packages for certbot which enables SSL (https)
RUN apk update && \
    apk add --no-cache \
    nginx \
    certbot \
    certbot-nginx \
    bash \
    curl \
    && apk add --no-cache --virtual .build-deps gcc libc-dev \
    # && npm install -g serve \
    && apk del .build-deps

# Download missing ssl file
# RUN curl -o /etc/letsencrypt/options-ssl-nginx.conf https://raw.githubusercontent.com/certbot/certbot/master/certbot-nginx/options-ssl-nginx.conf


# Copy build files to nginx
COPY --from=build /app/build /usr/share/nginx/html

# Copy custom nginx configuration
COPY .nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80 443

# Start nginx
# CMD ["nginx", "-g", "daemon off;"]
# CMD ["sh", "-c", "certbot --non-interactive --agree-tos --email aborger@orbital-robots.com --nginx -d orbital-robots.com && nginx -g 'daemon off;'"]
CMD ["sh", "-c", "nginx && certbot --non-interactive --agree-tos --email aborger@orbital-robots.com --nginx -d orbital-robots.com && tail -f /dev/null"]


