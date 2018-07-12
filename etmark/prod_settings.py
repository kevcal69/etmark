import os

try:
    from .settings import *
except ImportError as e:
    pass

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

ALLOWED_HOSTS = ['*']
DEBUG = True
SECRET_KEY = os.getenv('SECRET_KEY ', 'thequickbrownfoxjumpsoverthelazydog')

STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
STATIC_URL = os.getenv('STATIC_URL', '/static/')

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'HOST': os.getenv('DB_HOST', 'localhost'),
        'PORT': os.getenv('DB_PORT', 5432),
        'NAME': os.getenv('DB_NAME', 'etmark'),
        'USER': os.getenv('DB_USER', 'etmark'),
        'PASSWORD': os.getenv('DB_PASSWORD', 'etmark')
    }
}

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'