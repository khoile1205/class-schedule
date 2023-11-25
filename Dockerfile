# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

COPY . .


# Install project dependencies
RUN npm install
RUN  npm run build

# Specify the command to run your application
CMD [ "npm", "start" ]
