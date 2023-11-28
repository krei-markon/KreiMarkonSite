from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import *

# !Если переношу CustomAdmin в models, то перестает работать


class CustomAdmin(UserAdmin):
    fieldsets = UserAdmin.fieldsets + \
        ((None, {'fields': ('tg', )}),)  # type: ignore
    add_fieldsets = UserAdmin.add_fieldsets + ((None, {'fields': ('tg',)}),)


admin.site.register(CustomUser, CustomAdmin)
admin.site.register(Designs)
admin.site.register(Orders)
# Register your models here.
