FROM node:22

WORKDIR /my_app

COPY . .

RUN npm install

RUN npx prisma generate

CMD ["npm", "run", "dev"]