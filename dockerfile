FROM node:22.12.0-alpine

RUN apk add --no-cache \
    git \
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