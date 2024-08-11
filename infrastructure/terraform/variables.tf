variable "aws_region" {
  description = "AWS region"
  default     = "us-east-1"
}

variable "instance_type" {
  description = "EC2 instance type"
  default     = "t2.micro"
}

variable "ami_id" {
  description = "AMI ID"
  default     = "ami-0ae8f15ae66fe8cda"  # Replace with your region's Amazon Linux 2 AMI ID
}

variable "key_name" {
  description = "Name of the SSH key pair"
  default     = "akeed-general-keypair"
}

variable "ssh_private_key" {
  description = "The SSH private key for accessing EC2 instances"
  type        = string
}


