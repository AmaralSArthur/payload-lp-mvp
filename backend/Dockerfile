FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

ENV NODE_ENV=development
ENV PORT=3000
ENV PAYLOAD_SECRET=dev-secret-change-in-production
ENV DATABASE_URI=mongodb://mongo:27017/payload-lp

EXPOSE 3000

CMD ["npx", "next", "dev", "-H", "0.0.0.0", "-p", "3000"]
