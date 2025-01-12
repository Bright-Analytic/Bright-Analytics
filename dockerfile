FROM node:22.12.0-alpine

RUN apk add --no-cache \
    python3 \
    make \
    g++ \
    wget \
    cmake \
    openssl-dev \
    curl-dev \
    && ln -sf python3 /usr/bin/python

# Install Pulsar C++ client library dependencies
RUN apk add --no-cache \
    libstdc++ \
    libgcc \
    libressl \
    curl

# Download and install Pulsar C++ client library
RUN wget https://archive.apache.org/dist/pulsar/pulsar-2.8.1/DEB/apache-pulsar-client.deb \
    && ar x apache-pulsar-client.deb \
    && tar -xvf data.tar.xz -C / \
    && rm apache-pulsar-client.deb control.tar.gz data.tar.xz debian-binary

WORKDIR /wdir

# Copy all necessary files
COPY . .

# Install dependencies
RUN npm install

# Build all libraries
RUN npm run build:libs

RUN npm install

# Install dependencies for each app
WORKDIR /wdir/apps/analytics-api
RUN npm install

WORKDIR /wdir/apps/event-processor
RUN npm install

WORKDIR /wdir/apps/pageview-api
RUN npm install

WORKDIR /wdir/apps/queue-worker
RUN npm install

WORKDIR /wdir/apps/script-server
RUN npm install

# Build all apps
WORKDIR /wdir

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