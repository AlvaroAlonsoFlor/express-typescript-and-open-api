FROM node:16-alpine3.14
COPY ./build .
COPY package*.json .

EXPOSE 8080

RUN npm ci --production

CMD [ "node", "index.js" ]

