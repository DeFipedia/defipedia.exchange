FROM node:10

WORKDIR /usr/src/app

ENV PORT 5000

COPY package.json ./

RUN yarn install

COPY . .

RUN yarn run build

RUN yarn global add serve

CMD serve -s build