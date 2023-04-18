from django.urls import path
from .views import VacancyList, VacancyDetail, CompanyVacancies, TopVacancies
from . import views

urlpatterns = [
    path('companies/', views.company_list, name='company-list'),
    path('companies/<int:pk>/', views.company_detail, name='company-detail'),
    path('companies/<int:id>/vacancies/', CompanyVacancies.as_view(), name='company-vacancies'),
    path('vacancies/', VacancyList.as_view(), name='vacancy-list'),
    path('vacancies/<int:id>/', VacancyDetail.as_view(), name='vacancy-detail'),
    path('vacancies/top-ten/', TopVacancies.as_view(), name='top-vacancies'),
]
