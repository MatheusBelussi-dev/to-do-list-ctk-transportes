# Usar uma imagem base do Node.js
FROM node:20.14.0-alpine

# Definir o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copiar o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar todos os arquivos da aplicação para o diretório de trabalho
COPY . .

# Construir a aplicação Next.js
RUN npm run build

# Expor a porta que o Next.js usará
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]