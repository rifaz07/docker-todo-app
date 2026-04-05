# --- Stage 1: deps ---
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev

# --- Stage 2: final image ---
FROM node:20-alpine
WORKDIR /app

# Copy only what's needed from the deps stage
COPY --from=deps /app/node_modules ./node_modules

# Copy app source
COPY server.js .
COPY public ./public

EXPOSE 3000

CMD ["node", "server.js"]
