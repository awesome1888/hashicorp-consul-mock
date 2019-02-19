FROM node:8.10
RUN apt-get update && apt-get install -y --no-install-recommends vim && apt-get clean

RUN mkdir /app
WORKDIR /app

COPY package*.json ./

RUN npm install
COPY . .
RUN npm run build

EXPOSE 3010
CMD [ "yarn", "start" ]
