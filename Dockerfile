FROM node:slim as compilacion
WORKDIR /usr/src/tablerocorona
COPY . .
RUN dir
RUN npm i
RUN npm build --prod


# Creacion Servidor
FROM nginx:alpine
COPY --from=compilacion /usr/src/tablerocorona/dist/StatusCorona /usr/share/nginx/html
