from rest_framework import permissions

class IsOwnerPermisstion(permissions.BasePermission):
  message = 'Только владелец может редактировать заказ'

  def has_object_permission(self, request, view, obj):
    if not obj:
      return super().has_object_permission(request, view, obj)
    if request.user.id == obj.user.id:
      return True
    else:
      return False