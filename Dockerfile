ARG NODE_VERSION=20.11.0

FROM node:${NODE_VERSION}-alpine as development

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

CMD [ "npm", "run", "start:dev" ]

# FROM node:${NODE_VERSION}-alpine as production

# ARG NODE_ENV=production
# ENV NODE_ENV=${APP_ENV}

# WORKDIR /app

# COPY package*.json ./

# RUN npm install --only=production

# COPY . .

# COPY --from=development /app/dist ./dist

# CMD ["npm", "run", "start:prod"]