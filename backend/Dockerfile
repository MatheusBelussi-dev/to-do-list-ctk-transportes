# Usar a imagem base do Node.js
FROM node:20.16.0-alpine

# Definir o diretório de trabalho
WORKDIR /app

# Copiar package.json e package-lock.json
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o código da aplicação
COPY . .

# Expor a porta que a API irá utilizar
EXPOSE 5000

# Comando para iniciar a aplicação
CMD ["npm", "start"]