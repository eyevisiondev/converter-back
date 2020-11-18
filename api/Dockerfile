FROM node:12

WORKDIR /usr/src/app

COPY . ./

RUN npm install pm2 -g

RUN yarn

EXPOSE 3000
CMD ["pm2-runtime", "src/index.js"]