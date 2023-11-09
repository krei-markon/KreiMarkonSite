"""
URL configuration for back project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from krei_markon.views import *
from configs import settings
from django.conf import settings
from django.conf.urls.static import static


router = routers.DefaultRouter()
router.register(r'designs', DesignsViewSet)
router.register(r'orders', OrdersViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls))
]

if settings.DEBUG:
    urlpatterns = [
        path("__debug__/", include("debug_toolbar.urls")),
    ] + urlpatterns

urlpatterns += static(settings.STATIC_URL) + \
    static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


admin.site.site_header = "Krei Markon Admin"
admin.site.site_title = "Admin"
admin.site.index_title = "krei-markon"
