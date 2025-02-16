from django.shortcuts import render

# Create your views here.

def HomeView(request):
    return render(request,'HomePage.html')

def AboutView(request):
    return render(request,'AboutUs.html')

def WorkView(request):
    return render(request,'OurWork.html')


