from django.db import models
from django.contrib.auth.models import User

from hashids import Hashids


hashids = Hashids()


class Document(models.Model):
    owner = models.ForeignKey(
        User, related_name='docs',
        blank=True, null=True, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    content = models.TextField(max_length=10000)

    @property
    def short_url(self):
        return hashids.encode(self.pk)
