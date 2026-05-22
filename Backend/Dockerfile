# Use an official Node.js runtime as the base
FROM node:20-slim

# Install necessary dependencies for Chromium
RUN apt-get update && apt-get install -y --no-install-recommends \
    chromium \
    fonts-liberation \
    libnss3 \
    libatk-bridge2.0-0 \
    libx11-xcb1 \
    libxcomposite1 \
    libxdamage1 \
    libxrandr2 \
    libgbm1 \
    libasound2 \
    libpangocairo-1.0-0 \
    libatk1.0-0 \
    libcups2 \
    && rm -rf /var/lib/apt/lists/*

# Tell Puppeteer to skip its own Chromium download and use the system one
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium

# Set working directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy application code
COPY . .

# Expose port (Render automatically maps this)
EXPOSE 3000

# Start the application
CMD ["node", "server.js"]
