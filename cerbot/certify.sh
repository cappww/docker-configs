# Nginx must be off or no on port 80
# The --standalone flag and http challenge wont work for wildcard domains
# Wildcard domains require --manual and dns challenge
sudo docker run -it --rm --name certbot \
	-v "/etc/letsencrypt:/etc/letsencrypt" \
	-v "/var/lib/letsencrypt:/var/lib/letsencrypt" \
	certbot/certbot certonly \
		--server https://acme-v02.api.letsencrypt.org/directory \
		--standalone \
		-d <sub.domain-name.com> \
		--preferred-challenges http 
