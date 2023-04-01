# Terraform Main file for cloud configurations.
terraform {
  cloud {
    organization = "mdirshaddev"

    workspaces {
      name = "mdirshaddev-com"
      tags = [
        "web"
      ]
    }
  }
}