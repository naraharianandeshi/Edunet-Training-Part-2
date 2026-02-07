from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def hello(request):
    return HttpResponse("Hello, welcome!!")
def about(request):
    return HttpResponse("This is the about page.")

