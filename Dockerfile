# Derived from https://github.com/yukihiko-shinoda/dockerfile-gatsby/blob/master/Dockerfile
FROM node:14.15.4-alpine

WORKDIR /app

COPY . .

# RUN apk update && apk add --no-cache --virtual \
#         python \
#         git \
#         util-linux openssl sudo \
#         g++ \
#         autoconf automake libtool gcc make musl-dev file pkgconfig nasm \
#         vips \
#     && npm install 

RUN apk add --no-cache \
  make g++ && \
  apk add vips-dev fftw-dev --update-cache \
  && rm -fR /var/cache/apk/*

RUN npm install -g gatsby-cli

RUN npm install

RUN gatsby build

EXPOSE 8000

CMD ["gatsby", "serve",  "--port", "8000", "--host", "0.0.0.0" ]