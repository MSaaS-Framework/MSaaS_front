# Use the official oven/bun image
FROM oven/bun:1.1.45

# Set working directory
WORKDIR /app

# Copy package.json and bun.lockb
COPY package.json bun.lockb ./

# Install dependencies
RUN bun install

# Copy application source code
COPY . .

# Build the application for production
RUN bun run build

# Expose the application port
EXPOSE 3000

# Start the application in production
CMD ["bun", "run", "start"]