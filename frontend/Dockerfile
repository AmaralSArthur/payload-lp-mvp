FROM node:22-alpine

WORKDIR /app

COPY .npmrc .npmrc
COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

ENV PORT=4200

EXPOSE 4200

CMD ["npx", "ng", "serve", "--host", "0.0.0.0", "--port", "4200"]
