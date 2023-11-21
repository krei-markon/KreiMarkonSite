from django.contrib.auth.models import AbstractUser
from django.db import models
from datetime import datetime


class User(AbstractUser):
    tg = models.CharField(max_length=100)


class Designs(models.Model):
    design = models.ImageField(
        upload_to='images/designs', default='images/designs/ovchinkin.png')

    def __str__(self) -> str:
        return self.design.name.split('/')[2]

    class Meta:
        verbose_name_plural = "designs"
        db_table = 'designs'


class Orders(models.Model):
    type = models.CharField(max_length=100)
    task = models.CharField(max_length=100)
    deadlines = models.DateField(default=datetime.today)
    cnt = models.IntegerField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        verbose_name_plural = "orders"
        db_table = 'orders'
