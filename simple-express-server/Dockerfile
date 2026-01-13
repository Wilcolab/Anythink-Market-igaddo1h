FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npx", "nodemon", "src/index.js"]

EXPOSE 8001