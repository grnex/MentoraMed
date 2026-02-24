# ---- Build (Vite) ----
    FROM node:20-alpine AS build
    WORKDIR /app
    
    # Instala dependências a partir do lockfile
    COPY package*.json ./
    RUN npm ci
    
    # Copia o restante do projeto e faz o build
    COPY . .
    RUN npm run build
    
    # ---- Runtime (Nginx) ----
    # Nome do stage: production
    FROM nginx:alpine AS production
    
    # Copia o build do Vite para o docroot do Nginx
    COPY --from=build /app/dist /usr/share/nginx/html
    
    # Sobrescreve a conf padrão do Nginx
    COPY ./nginx.conf /etc/nginx/conf.d/default.conf
    
    EXPOSE 80
    CMD ["nginx", "-g", "daemon off;"]
    