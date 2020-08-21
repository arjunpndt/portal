from django.shortcuts import render
from django.http import HttpResponse,JsonResponse,HttpResponseRedirect
from data.models import student_data
import json

def STUDENT_LOGIN_FUN(request):
    if(request.method=="POST"):
        print(json.loads(request.body))
        data=json.loads(request.body)
        USER_NAME=data['USER_NAME']
        PASSWORD=data['PASSWORD']
        num=student_data.objects.filter(USER_NAME=USER_NAME,PASSWORD=PASSWORD).exists()
        if(num): 
            user=student_data.objects.filter(USER_NAME=USER_NAME,PASSWORD=PASSWORD).values()
            return JsonResponse(list(user),safe=False)
        else:
            return JsonResponse("wrong credentials",safe=False)
    
