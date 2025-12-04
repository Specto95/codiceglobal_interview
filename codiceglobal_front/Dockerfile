FROM node:20-alpine

#necesario en caso de no tener pnpm
RUN npm install -g pnpm

WORKDIR /app

COPY package*.json ./
COPY pnpm-lock.yaml ./
RUN pnpm install

COPY . .

EXPOSE 5173

# USING PNPM
CMD ["pnpm", "dev", "--host"]
