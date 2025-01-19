FROM node:22.12.0-alpine

WORKDIR /wdir

# Copy all necessary files
COPY . .

RUN ls -l

# Install dependencies
RUN npm install

RUN npx lerna init

# Build all libraries
RUN npm run build:libs

# Build all apps
RUN npm run build:apps

# Install supervisord
RUN apk add --no-cache supervisor

# Create supervisord configuration file
RUN mkdir -p /etc/supervisor.d
COPY supervisord.conf /etc/supervisor.d/supervisord.conf

# Expose necessary ports
EXPOSE 8001 8002 8003

# Start all services using supervisord
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor.d/supervisord.conf"]