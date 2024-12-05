# Use a Python base image
FROM node:18-alpine

# Create data file
RUN mkdir -m 777 /data
RUN mkdir -m 777 /data/db

WORKDIR /var/www

COPY package.json package-lock.json ./

RUN npm install -g node-gyp

RUN npm config set fetch-retry-maxtimeout 600000 -g && npm install
RUN npm rebuild bcrypt --build-from-source

ENV PATH=/var/www/node_modules/.bin:$PATH

WORKDIR /var/www/app

COPY . .

RUN npm run build

CMD ["npm", "run","start"]
