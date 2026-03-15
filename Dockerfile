# Use Node.js for building
FROM node:20-slim AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production runtime
FROM node:20-slim

WORKDIR /app

# Copy built assets and production dependencies
COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/package.json /app/package.json
COPY --from=builder /app/public /app/public
COPY --from=builder /app/.env /app/.env

# Create server entry point
# Note: Qwik production entry point depends on the adapter used.
# Since the user has netlify in package.json but we are dockerizing, 
# we might need to use the node adapter or preview for general docker.
# For simplicity in local docker, we'll use npm run start or node server/entry.mjs

EXPOSE 3000

CMD ["npm", "run", "start"] # Or equivalent based on user's vite config
