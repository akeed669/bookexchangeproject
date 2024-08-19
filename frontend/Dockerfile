# Use an official Node.js runtime as a parent image
FROM node:18-alpine AS build

# Set the working directory in the container
WORKDIR /usr/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies (only production dependencies)
RUN npm ci --omit=dev

# Set build arguments
ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=$REACT_APP_API_URL

# Copy the rest of the application code
COPY . .

# Build the application with the API URL embedded
RUN npm run build

# Use a minimal base image with only nginx to serve the content
FROM nginx:stable-alpine

# Copy the build output to the nginx html directory
COPY --from=build /usr/app/build /usr/share/nginx/html

# Copy the custom nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 to the outside world
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
