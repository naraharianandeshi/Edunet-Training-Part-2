from django.shortcuts import render, get_object_or_404
from .models import Category, Product


def index(request):
    categories = Category.objects.all()
    featured = Product.objects.filter(is_active=True)[:6]
    return render(request, 'index.html', {'categories': categories, 'featured': featured})


def category_view(request, slug):
    cat = get_object_or_404(Category, slug=slug)
    products = cat.products.filter(is_active=True)
    return render(request, 'category_list.html', {'category': cat, 'products': products})


def product_detail(request, pk):
    product = get_object_or_404(Product, pk=pk, is_active=True)
    return render(request, 'product_detail.html', {'product': product})
