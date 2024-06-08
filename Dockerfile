# ambil image noe js dari docker
FROM node:18-alpine

#  working dir

WORKDIR /app

# coopy packge.json
COPY package*.json ./

# run
RUN npm install

COPY . .
EXPOSE 3000

CMD [ 'nodemone','app.js']
