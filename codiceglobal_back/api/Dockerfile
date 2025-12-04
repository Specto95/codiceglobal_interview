FROM node:20-alpine

#necesario en caso de no tener pnpm
RUN npm install -g pnpm

WORKDIR /app

COPY package*.json ./
COPY pnpm-lock.yaml ./
RUN pnpm install

COPY . .

EXPOSE 3000

# using pnpm, run application based on the next script in package.json:
# "start:local": "nodemon --env-file=.env server-with-local.mjs"
CMD ["pnpm", "start:local"]