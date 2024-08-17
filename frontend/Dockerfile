# Use an official Node.js runtime as a parent image
FROM node:18-alpine AS build

# Set the working directory in the container
WORKDIR /usr/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies (only production dependencies)
RUN npm ci --omit=dev

# Copy the rest of the application code
COPY . .

# Build the application (assuming you're using a build tool like React's create-react-app)
RUN npm run build

# Use a minimal base image with only nginx to serve the content
FROM nginx:stable-alpine

# Copy the build output to the nginx html directory
COPY --from=build /usr/app/build /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
