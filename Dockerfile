# Use Node.js LTS image
FROM node:18

# Set working directory
WORKDIR /app

# Copy dependencies
COPY package*.json ./
RUN npm install

# Copy app files
COPY . .

# Expose port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
