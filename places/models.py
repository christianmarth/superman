from django.db import models


class Place(models.Model):

    name = models.CharField(max_length=512)
    description = models.TextField(blank=True, null=True)
    lat = models.FloatField()
    lon = models.FloatField()
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
