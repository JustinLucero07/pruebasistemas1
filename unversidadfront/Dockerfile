FROM node:18-alpine as build
WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install -g @angular/cli

RUN npm install

COPY . .

RUN ng build --configuration production

FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /app/dist/unversidadfront/browser /usr/share/nginx/html

EXPOSE 80
