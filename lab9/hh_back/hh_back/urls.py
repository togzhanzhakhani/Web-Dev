from django.contrib import admin
from django.urls import path
from api.views import CompanyList, CompanyDetail, VacancyList, VacancyDetail, CompanyVacancies, TopVacancies

urlpatterns = [
    path('admin/', admin.site.urls),
    path('companies/', CompanyList.as_view(), name='company-list'),
    path('companies/<int:id>/', CompanyDetail.as_view(), name='company-detail'),
    path('companies/<int:id>/vacancies/', CompanyVacancies.as_view(), name='company-vacancies'),
    path('vacancies/', VacancyList.as_view(), name='vacancy-list'),
    path('vacancies/<int:id>/', VacancyDetail.as_view(), name='vacancy-detail'),
    path('vacancies/top-ten/', TopVacancies.as_view(), name='top-vacancies'),
]