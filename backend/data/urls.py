from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^student_login/$',views.STUDENT_LOGIN_FUN,name="STUDENT_LOGIN_FUN"),
]