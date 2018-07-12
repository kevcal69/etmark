#!/bin/bash

# Prepare log files and start outputting logs to stdout
mkdir -p /app/logs
touch /app/logs/gunicorn.log
touch /app/logs/gunicorn-access.log
tail -n 0 -f /app/logs/gunicorn*.log &
export DJANGO_SETTINGS_MODULE=etmark.prod_settings
python manage.py collectstatic --noinput
python manage.py migrate

echo "STARTING DJANGO SERVER"
echo $DJANGO_SETTINGS_MODULE

exec gunicorn etmark.wsgi:application \
    --name etmark \
    --bind 0.0.0.0:8000 \
    --workers 4 \
    --log-level=info \
    --log-file=/app/logs/gunicorn.log \
    --access-logfile=/app/logs/gunicorn-access.log \
    "$@"
