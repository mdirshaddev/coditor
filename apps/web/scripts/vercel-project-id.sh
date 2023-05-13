#!/bin/sh
# This shell script is using the Terraform command-line tool to retrieve the output value of a
# specific resource from a Terraform project.
# TERRAFORM_DIR - terraform directory
VERCEL_PROJECT_ID=$(terraform -chdir=$TERRAFORM_DIR output -json \
  | grep value \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g')

echo $VERCEL_PROJECT_ID
