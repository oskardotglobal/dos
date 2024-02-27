FROM node:20

# npm install
ADD package*.json /src/
WORKDIR /src
RUN npm i

# build
ADD . /src
RUN npm run build

# clean
RUN npm prune --production

# move
RUN rm -rf /app \
    && mv dist /app \
    && mv node_modules /app/ \
    && rm -rf /src

# ENV
ENV NODE_ENV production

EXPOSE 3000

WORKDIR /app
CMD node index.js