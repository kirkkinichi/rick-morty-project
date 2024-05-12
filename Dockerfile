FROM node:alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install -g @angular/cli@latest

RUN npm install

# RUN npm run build

CMD ["ng", "serve", "--host", "0.0.0.0"]