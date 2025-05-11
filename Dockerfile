# Use Node.js LTS image
FROM node:18

# Set working directory
WORKDIR /app

# Copy dependency definitions
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Optional: Run ESLint during build (fail build if lint errors exist)
RUN npx eslint . --ext .js || true

# Fix permissions for Jest
RUN chmod +x ./node_modules/.bin/jest

# Expose app port
EXPOSE 3000

# Run app
CMD ["npm", "start"]
