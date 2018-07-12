FROM python:3.6-alpine


RUN apk update && \
    apk add nodejs nodejs-npm && \
    apk add postgresql-libs && \
    apk add --virtual .build-deps gcc musl-dev postgresql-dev

ENV PYTHONUNBUFFERED 1

RUN mkdir /app
WORKDIR /app
COPY requirements.txt /app/
RUN python -m pip install -r requirements.txt --no-cache-dir && \
    apk --purge del .build-deps


COPY package.json /app/
RUN npm install

ADD . /app/
RUN npm run build:prod

EXPOSE 8000
CMD ["sh", "entrypoint.sh"]