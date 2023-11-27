import logging
from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.db import models
from datetime import datetime
from django.contrib.auth import password_validation
from rest_framework import serializers

logger = logging.getLogger(__name__)
# class CustomUserManager(BaseUserManager):
#     use_in_migrations: bool = True

#     def _create_user(self , email : str ,number : int,password : str , **kwargs) -> "User":
#         if not email:
#             raise ValueError("User must have an email address.")
#         if not number:
#             raise ValueError("User must have an phone number.")
#         user : "User" = self.model(
#             email = self.normalize_email(email),
#             number=number,
#             **kwargs
#         )
#         logger.debug(password)
#         user.set_password(password_validation.validate_password(password=password))
#         user.save(using=self._db)
#         return user

#     def create_user(self , email , number , password , **kwargs):
#         kwargs.setdefault('is_active', True)
#         kwargs.setdefault('is_staff', False)
#         kwargs.setdefault('is_superuser', False)
#         return self._create_user(email=email,number=number, password=password, **kwargs)

#     def create_superuser(self , email ,number , password , **kwargs):
#         kwargs.setdefault('is_active', True)
#         kwargs.setdefault('is_staff', True)
#         kwargs.setdefault('is_superuser', True)
#         if kwargs.get('is_staff') is not True:
#             raise ValueError(
#                 'Superuser must have is_staff=True.'
#             )
#         if kwargs.get('is_superuser') is not True:
#             raise ValueError(
#                 'Superuser must have is_superuser=True.'
#             )
#         return self._create_user(email=email,number=number, password=password, **kwargs)

class User(AbstractUser):
    tg = models.CharField(max_length=100)


class Designs(models.Model):
    # logger.debug('hello!')
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
