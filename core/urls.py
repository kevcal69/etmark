from django.urls import path

from . import views

urlpatterns = [
    path('save-doc', views.SaveDoc.as_view(), name='save-doc'),
    path('<str:url_hash>', views.ViewDoc.as_view(), name='view-doc')
]
