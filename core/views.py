import json

from hashids import Hashids

from django.core.exceptions import ObjectDoesNotExist
from django.http import HttpResponse, HttpResponseRedirect
from django.views.generic import View

from .models import Document


hashids = Hashids()


class SaveDoc(View):

    def post(self, request, *args, **kwargs):
        title = request.POST.get('title')
        content = request.POST.get('content')

        if not title or not content:
            return HttpResponse('Missing Fields.', status=400)
        data = {
            'title': title,
            'content': content
        }
        if request.user.is_authenticated:
            data['owner'] = request.user
        doc = Document.objects.create(**data)

        return HttpResponse(doc.short_url, status=200)


class ViewDoc(View):

    def get(self, request, *args, **kwargs):
        url_hash = kwargs.get('url_hash', 0)
        hashs = hashids.decode(url_hash)
        if len(hashs) == 0:
            return HttpResponse('Can\'t find link', status=404)

        pk = hashs[0]
        try:
            doc = Document.objects.get(pk=pk)
        except ObjectDoesNotExist:
            return HttpResponse('Can\'t find link', status=404)
        context = {
            'title': doc.title,
            'content': doc.content
        }
        return HttpResponse(json.dumps(context), status=200)
