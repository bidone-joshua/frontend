# Stage 1: Build the TypeScript
FROM node:20-alpine AS builder

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

# Stage 2: Serve with a lightweight web server
FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app /app

RUN npm install --production

EXPOSE 4200
CMD ["npm", "start"]