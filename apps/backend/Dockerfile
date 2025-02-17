# Use an official Node.js LTS Alpine image for smaller size
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package manager files first (leverage Docker cache)
COPY package.json pnpm-lock.yaml ./

# Install pnpm and project dependencies
RUN corepack enable && pnpm install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the NestJS app
RUN pnpm run build

# --- Production Stage ---
FROM node:18-alpine AS runner

# Set working directory
WORKDIR /app

# Copy only necessary files from the builder stage
COPY --from=builder /app/package.json /app/pnpm-lock.yaml ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules

# Expose the application port
EXPOSE 3000

# Run the application in production mode
CMD ["node", "dist/main.js"]
