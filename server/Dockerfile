# ---------- stage 1: build frontend ----------
FROM node:18-alpine AS frontend-builder
WORKDIR /workspace

COPY apps/playground/package*.json apps/playground/
WORKDIR /workspace/apps/playground
RUN npm install

# copy source & build
COPY apps/playground/ ./src
WORKDIR /workspace/apps/playground/src
RUN npm run build


# ---------- stage 2: run server ----------
FROM node:18-alpine AS runtime
WORKDIR /app/server

COPY server/package*.json ./
RUN npm install --omit=dev

COPY server/ .

# copy static exported front-end
COPY --from=frontend-builder /workspace/apps/playground/out ./public


ENV NODE_ENV=production
EXPOSE 8080

CMD ["npm", "start"]
