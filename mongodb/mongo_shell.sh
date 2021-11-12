set -e

USER="$1"

PASS="$2"

if [ -z "$PASS" ]
then
    echo "Please enter in password"
else
    docker run -it --rm --name mongoDB mongo mongo "mongodb+srv://$USER:$PASS@cluster0-yzfy1.mongodb.net/"
fi
