# Set the base image
FROM node:18.15.0-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the source code to the container
COPY . .

# Build the production-ready code using Vite
RUN npm run build

# Set the command to start the Vite server
CMD ["npm", "run", "dev"]
