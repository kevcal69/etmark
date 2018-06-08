FROM python:3.6-alpine

RUN apk add --update nodejs nodejs-npm

ENV PYTHONUNBUFFERED 1

RUN mkdir /app
WORKDIR /app
COPY requirements.txt /app/
RUN pip install -r requirements.txt
COPY package.json /app/
RUN npm install

ADD . /app/
RUN npm run build:prod

CMD ['python manage.py runservers']
