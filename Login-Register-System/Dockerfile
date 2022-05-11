FROM node:16-alpine3.15
RUN mkdir /app
WORKDIR /app
COPY . /app
RUN npm install
CMD ["node", "app.js"]