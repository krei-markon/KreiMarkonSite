#!/bin/sh

python manage.py wait_for_db
python manage.py collectstatic --no-input
python manage.py makemigrations
python manage.py migrate --no-input
python manage.py init_admin


gunicorn configs.wsgi:application --bind 0.0.0.0:8000