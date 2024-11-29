FROM node:20-alpine

WORKDIR /usr/src/app


COPY package*.json ./
COPY vite.config.ts ./
COPY . .

RUN npm install

EXPOSE 8080

CMD ["npm", "run", "start"]
