# ---- Build (Vite) ----
FROM node:20-alpine AS build
WORKDIR /app

# Instala dependências
COPY package*.json ./
RUN npm ci

# Faz o build
COPY . .

# Variáveis VITE_* são injetadas no bundle durante o build
ARG VITE_GEMINI_API_KEY
ENV VITE_GEMINI_API_KEY=$VITE_GEMINI_API_KEY

RUN npm run build

# ---- Runtime (PHP + Nginx) ----
FROM php:8.2-fpm-alpine

# Instala Nginx e dependências para enviar email (opcional/básico)
RUN apk add --no-cache nginx

# Cria diretório do app
WORKDIR /var/www/html

# Copia o build do Vite
COPY --from=build /app/dist .

# Copia os arquivos PHP que estão na pasta public (no Vite eles vão para a raiz do dist)
# Nota: O Vite já coloca o conteúdo de 'public' na raiz do 'dist' durante o build.

# Configuração do Nginx
COPY ./nginx.conf /etc/nginx/http.d/default.conf

# Script de inicialização para rodar Nginx e PHP-FPM
RUN echo "#!/bin/sh" > /start.sh && \
    echo "php-fpm -D" >> /start.sh && \
    echo "nginx -g 'daemon off;'" >> /start.sh && \
    chmod +x /start.sh

EXPOSE 80

CMD ["/start.sh"]