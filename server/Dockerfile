FROM node:lts-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 8082

CMD ["npm", "run", "dev"]
