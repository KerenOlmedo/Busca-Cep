FROM node:14

WORKDIR /app

COPY backEnd /app

RUN npm install

EXPOSE 3000

CMD ["node", "index.js"]