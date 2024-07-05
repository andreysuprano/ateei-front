FROM node:18-alpine

WORKDIR /PORTFOLIO

COPY package.json .

RUN npm install

COPY . .

ENV PORT=5173

EXPOSE 5173

CMD [ "npm", "run", "dev"]