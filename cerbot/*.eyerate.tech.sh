sudo docker run -it --rm --name certbot \
	-v "/etc/letsencrypt:/etc/letsencrypt" \
	-v "/var/lib/letsencrypt:/var/lib/letsencrypt" \
	certbot/certbot certonly \
		--server https://acme-v02.api.letsencrypt.org/directory \
		--manual \
		-d *.eyerate.tech \
		--preferred-challenges dns
