from django.shortcuts import render
from .models import Designs
from .serializers import *
from rest_framework import viewsets


class DesignsViewSet(viewsets.ModelViewSet):
	serializer_class = DesignsSerializer
	queryset = Designs.objects.all()
	
class OrdersViewSet(viewsets.ModelViewSet):
	serializer_class = OrdersSerializer
	queryset = Orders.objects.all()

# Create your views here.
