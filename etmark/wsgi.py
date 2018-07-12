"""
WSGI config for etmark project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/2.0/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "etmark.settings")
print ("Initializing wsgi application")
print (os.getenv("DJANGO_SETTINGS_MODULE"))
application = get_wsgi_application()
