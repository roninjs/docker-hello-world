FROM node:lts

ARG NODE_ENV=test
ENV NODE_ENV $NODE_ENV

WORKDIR /code

ARG PORT=80
ENV PORT $PORT

COPY package.json /code/package.json
COPY package-lock.json /code/package-lock.json
RUN npm install

COPY . /code

CMD [ "node", "src/server.js" ]
