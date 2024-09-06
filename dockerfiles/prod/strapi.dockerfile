# Use a Python base image
FROM node:18.18.2

# Set the working directory inside the container
WORKDIR /var/www/app

COPY . .

RUN npm run build

CMD ["npm", "run","start"]
