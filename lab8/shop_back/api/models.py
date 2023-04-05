from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=255)
    class Meta:
        app_label = 'api'

class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.FloatField()
    description = models.TextField()
    count = models.IntegerField()
    is_active = models.BooleanField(default=True)
    category = models.ForeignKey(Category, related_name='products', on_delete=models.CASCADE)

