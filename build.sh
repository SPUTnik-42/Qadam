set -o errexit

pip install -r requirements.txt

python manage.py collectstatic --no-input

python manage.py createsuperuser --noinput --username "admin" --password "1234" --email "admin1234@gmail.com"