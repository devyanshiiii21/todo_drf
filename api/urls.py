from django.urls import path
from . import views

urlpatterns = [
    path('', views.apiOverview, name = 'api-overview'),
    path('task-list/', views.taskList, name = 'api-tasklist'),
    path('task-details/<str:pk>/', views.taskDetail, name = 'api-taskdetail'),
]