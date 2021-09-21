set -e

PASS="$1"

if [ -z "$PASS" ]
then
    echo "Please enter in password"
else
    docker run -it --rm --name mongoDB mongo mongo "mongodb+srv://Capp_Wiedenhoefer:$PASS@cluster0-yzfy1.mongodb.net/"
fi
