from django.shortcuts import render

# Create your views here.

def HomeView(request):
    return render(request,'Home.html')

def AboutView(request):
    pass



