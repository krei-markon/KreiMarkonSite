from django.shortcuts import render
from .models import Designs
from .serializers import *
from .permissions import *
from rest_framework import viewsets


class DesignsViewSet(viewsets.ModelViewSet):
    serializer_class = DesignsSerializer
    queryset = Designs.objects.all()

    # permission_classes = [
    #     permissions.IsAuthenticatedOrReadOnly, permissions.IsAdminUser]


class OrdersViewSet(viewsets.ModelViewSet):
    serializer_class = OrdersSerializer
    queryset = Orders.objects.all()

    # permission_classes = [
    #     permissions.IsAuthenticatedOrReadOnly, IsOwnerPermisstion]

    def get_serializer_class(self):
        if self.action == 'list':
            return OrdersListSerializer
        return super().get_serializer_class()

    def perform_create(self, serializer):
        if self.request.user.is_authenticated:
            serializer.save(user=self.request.user)

        return super().perform_create(serializer)

    def perform_update(self, serializer):
        serializer.save(user=self.request.user)
        return super().perform_update(serializer)
