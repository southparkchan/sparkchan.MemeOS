FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --production

# Copy seluruh repo (index.html, assets, dst)
COPY .. /app

EXPOSE 3000

CMD ["npm", "start"]
