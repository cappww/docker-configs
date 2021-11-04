# Steps for NGINX with SSL and Certbot

1. Download certbot/cerbot in docker

2. Run script to get certificates

3. Grab the certificate in /etc/letsencrypt


From: https://doc.owncloud.org/server/10.7/admin_manual/installation/docker/
## Note
ADMIN_USERNAME and ADMIN_PASSWORD will not change between deploys even if you change the values in the .env file. To change them, you’ll need to do docker volume prune, which will delete all your data.

## IMPORTANT
All files stored in this setup are contained in Docker volumes rather than a physical filesystem tree. It is the admin’s responsibility to make the files persistent.

To inspect the volumes run:

sudo docker volume ls | grep ownclouddockerserver
To export the files as a tar archive run:

sudo docker run -v ownclouddockerserver_files:/mnt \
    ubuntu tar cf - -C /mnt . > files.tar
    