from django.core.management.base import BaseCommand
from fashion.models import Category, Product


class Command(BaseCommand):
    help = 'Populate sample categories and products'

    def handle(self, *args, **options):
        data = [
            ('Kids', 'kids'),
            ('Women', 'women'),
            ('Men', 'men'),
        ]
        for name, slug in data:
            cat, _ = Category.objects.get_or_create(name=name, slug=slug)

        sample_products = [
            ('Kids T-Shirt', 'kids-tshirt', 'Comfortable cotton tee for kids', '19.99', 'https://via.placeholder.com/400x300?text=Kids'),
            ('Women Dress', 'women-dress', 'Stylish summer dress', '49.99', 'https://via.placeholder.com/400x300?text=Women'),
            ('Men Jacket', 'men-jacket', 'Warm jacket for men', '89.99', 'https://via.placeholder.com/400x300?text=Men'),
        ]

        for title, slug, desc, price, img in sample_products:
            # map product to category based on slug prefix
            cat_slug = slug.split('-')[0]
            try:
                cat = Category.objects.get(slug=cat_slug)
            except Category.DoesNotExist:
                cat = Category.objects.first()
            Product.objects.update_or_create(
                slug=slug,
                defaults={
                    'category': cat,
                    'title': title,
                    'description': desc,
                    'price': price,
                    'image_url': img,
                    'is_active': True,
                }
            )

        self.stdout.write(self.style.SUCCESS('Sample data populated'))
