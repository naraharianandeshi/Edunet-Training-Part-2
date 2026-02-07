from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('category/<slug:slug>/', views.category_view, name='category'),
    path('product/<int:pk>/', views.product_detail, name='product_detail'),
]
