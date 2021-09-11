from django.db import models

class BannedUsers(models.Model):
    host = models.CharField(max_length=24, verbose_name='host')
    headers = models.CharField(max_length=24, verbose_name='headers')

    def __str__(self):
        return self.host
