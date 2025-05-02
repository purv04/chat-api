# Use Node.js LTS image
FROM node:18

# Set working directory
WORKDIR /app

# Copy dependencies
COPY package*.json ./
RUN npm install

# Copy app files
COPY . .

# 👇 Fix permissions for Jest
RUN chmod +x ./node_modules/.bin/jest

# Expose port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
