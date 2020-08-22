from django.db import models



class student_data(models.Model):
    USER_NAME=models.CharField(max_length=250,unique=True,default="NULL")
    PASSWORD=models.CharField(max_length=250,default="KIET123")
    father_name=models.CharField(max_length=250,default="father")
    father_name=models.CharField(max_length=250,default="father")
    email=models.CharField(max_length=250,unique=True,default="kiet123@.com")
    branch=models.CharField(max_length=250,default="IT")
    phone_no=models.BigIntegerField(unique=True,default="1234567890")
    STATUS=models.CharField(max_length=100,default="NO QUERY")
    ACTIVE_STATUS=models.CharField(max_length=100,default="ACTIVE")
    