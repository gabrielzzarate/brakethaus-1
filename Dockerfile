FROM node:latest

ENV DIRPATH /home/avant/brakethaus

COPY . $DIRPATH

WORKDIR $DIRPATH

RUN npm install

EXPOSE 3000

RUN npm run build

CMD ["npm", "start"]


