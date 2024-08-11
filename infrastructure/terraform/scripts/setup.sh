#!/bin/bash

# Update the package list and install Docker
sudo yum update -y
sudo yum install -y docker

# Start and enable Docker
sudo service docker start
sudo systemctl enable docker

# Add the ec2-user to the docker group to run Docker without sudo
sudo usermod -aG docker ec2-user

# Pull the Docker image from Docker Hub
docker pull akeedm/bookexchangeserver:latest

# Run the Docker container
docker run -d -p 80:80 akeedm/bookexchangeserver:latest
