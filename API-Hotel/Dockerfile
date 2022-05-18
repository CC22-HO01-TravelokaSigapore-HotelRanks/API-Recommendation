FROM node:16-alpine3.15
RUN mkdir /app
WORKDIR /app

ENV PORT 8080
ENV HOST 0.0.0.0
COPY package*.json ./

RUN npm ci


COPY . .

CMD ["npm", "start"]