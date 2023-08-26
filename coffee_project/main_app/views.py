from rest_framework import viewsets
from .serializers import *
from django.shortcuts import render,redirect
from django.contrib.auth.models import User
from django.contrib.auth import login,logout,authenticate
from django.contrib.auth.decorators import login_required
from .models import *

class PostViewSet(viewsets.ModelViewSet):
	queryset = Post.objects.all()
	serializer_class = PostSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

def register(request):
    if request.method=="POST":
        userName=request.POST["userName"]
        firstName=request.POST["firstName"]
        lastName=request.POST["lastName"]
        email=request.POST["email"]
        password=request.POST["password"]
        password2=request.POST["password2"]
        
        if password==password2:
            if User.objects.filter(username=userName).exists():
                context={
                    'information':'Bu kullanıcı adı kullanılmaktadır. Farklı bir kullanıcı adı deneyin!'
                }
                return render(request,'register.html',context)
            
            if User.objects.filter(email=email).exists():
                context={
                    'information':'Bu mail adresi kullanılmaktadır. Farklı bir mail adresi deneyin!'
                }
                return render(request,'register.html',context)
            
            else:
                user=User.objects.create_user(username=userName,first_name=firstName,last_name=lastName,email=email,password=password)
                user.save()
                return redirect('/')
        else:
            context = {
                'information':'Parolanız girmiş olduğunuz tekrar parolasıyla uyuşmuyor!'
            }
            return render(request,'register.html',context)
    
    return render(request,'register.html')