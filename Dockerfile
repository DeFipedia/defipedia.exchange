FROM node:10

WORKDIR /usr/src/app

EXPOSE  8545 8080 30303

ENV PORT 8080

COPY package.json ./

RUN yarn install 

COPY . .

RUN yarn run build

RUN yarn global add serve

CMD serve -s build