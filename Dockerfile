FROM node:carbon

WORKDIR ./

COPY ./package.json ./package-lock.json ./

RUN npm install

CMD tail -f /dev/null
