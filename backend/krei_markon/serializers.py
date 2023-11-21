from rest_framework import serializers
from .models import *


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'first_name', 'last_name', 'tg']


class DesignsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Designs
        fields = ['id', 'design']


class OrdersSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Orders
        fields = '__all__'


class OrdersListSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Orders
        fields = '__all__'
