from django.shortcuts import render
from .models import Designs, CustomUser
from .serializers import *
from .permissions import *
from rest_framework import viewsets, mixins, views, response, generics

logger = logging.getLogger(__name__)


class UserViewSet(viewsets.GenericViewSet, mixins.CreateModelMixin):
    serializer_class = UserSerializer
    queryset = CustomUser.objects.all()

    def perform_create(self, serializer):
        user = CustomUser.objects.create_user(  # type: ignore
            **serializer.validated_data)  # type: ignore
        user.set_password(serializer.validated_data['password'])

        return user


class UserCurrent(views.APIView):
    def get(self, request):
        logger.debug(request.user)
        serializer = UserSerializer(request.user)
        return response.Response(serializer.data)


class DesignsViewSet(viewsets.ModelViewSet):
    serializer_class = DesignsSerializer
    queryset = Designs.objects.all()

    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly]


class OrdersViewSet(viewsets.ModelViewSet):
    serializer_class = OrdersSerializer
    queryset = Orders.objects.all()

    permission_classes = [
        permissions.IsAuthenticated, IsOwnerPermisstion]

    def get_serializer_class(self):
        if self.action == 'list':
            return OrdersListSerializer
        return super().get_serializer_class()

    def perform_create(self, serializer):
        if self.request.user.is_authenticated:
            logger.debug(self.request.user)
            serializer.save(user=self.request.user)

        return super().perform_create(serializer)

    def perform_update(self, serializer):
        serializer.save(user=self.request.user)
        return super().perform_update(serializer)


class OrdersCurrent(generics.ListAPIView):
    serializer_class = OrdersSerializer

    def get_queryset(self):
        """
        This view should return a list of all the purchases
        for the currently authenticated user.
        """
        user = self.request.user
        return Orders.objects.filter(user=user)
