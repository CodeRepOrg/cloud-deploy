FROM node:lts-alpine as FRONT

WORKDIR /usr/builder

COPY ./ja /usr/builder

RUN npm install && \
    npm run build

FROM node:lts-slim

WORKDIR /usr/app/app
COPY . .

RUN npm install

COPY --from=FRONT \
    /usr/builder/build /usr/app/ja

EXPOSE 8080

CMD [ "npm", "start" ]