from django.urls import path
from . import views

urlpatterns = [
    path('conInvLogin/', views.conInvLoginView, name='conInvLogin'),
    path('conInvRegister/', views.conInvRegisterView, name='conInvRegister'),
    path('stuLogin/', views.stuLoginView, name='stuLogin'),
    path('stuRegister/', views.stuRegisterView, name='stuRegister'),
    path('adminLogin/', views.adminLoginView, name='adminLogin'),
    path('adminRegister/', views.adminRegisterView, name='adminRegister'),
    path('viewIdeas/', views.pitchIdeaView, name='viewIdeas'),
    path('viewSchemes/', views.schemesView, name='viewSchemes'),
]
