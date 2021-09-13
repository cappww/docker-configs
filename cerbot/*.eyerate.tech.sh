# If you want to run this outside of the intended webserver, include the --manual option
sudo docker run -it --rm --name certbot \
	-v "/etc/letsencrypt:/etc/letsencrypt" \
	-v "/var/lib/letsencrypt:/var/lib/letsencrypt" \
	certbot/certbot certonly \
		--server https://acme-v02.api.letsencrypt.org/directory \
		-d <domain-name.com> \
		--preferred-challenges dns
