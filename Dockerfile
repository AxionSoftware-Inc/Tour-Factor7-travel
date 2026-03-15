# Use Node.js for building
FROM node:20-slim AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Build the application
RUN npm run build && npm run build.preview

# Production runtime
FROM node:20-slim

WORKDIR /app

# Copy built assets and runtime dependencies
COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/server /app/server
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/package.json /app/package.json
COPY --from=builder /app/serve-production.mjs /app/serve-production.mjs

EXPOSE 3000

CMD ["node", "serve-production.mjs"]
