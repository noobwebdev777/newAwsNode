# Stage 1: Build stage
FROM node:14 AS builder

WORKDIR /usr/src/app

COPY package*.json ./

# Install only production dependencies to reduce image size
RUN npm install --production

COPY . .

# Stage 2: Final stage
FROM node:14-alpine

WORKDIR /usr/src/app

# Copy only necessary files from the builder stage
COPY --from=builder /usr/src/app .

EXPOSE 3000

CMD ["node", "main.js"]
