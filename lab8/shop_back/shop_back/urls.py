from django.urls import path
from api.views import HomeView, ProductList, ProductDetail, CategoryList, CategoryDetail, CategoryProducts

urlpatterns = [
    path('', HomeView.as_view(), name='home'),
    path('products/', ProductList.as_view(), name='products'),
    path('products/<int:id>/', ProductDetail.as_view()),
    path('categories/', CategoryList.as_view()),
    path('categories/<int:id>/', CategoryDetail.as_view()),
    path('categories/<int:id>/products/', CategoryProducts.as_view()),
]
