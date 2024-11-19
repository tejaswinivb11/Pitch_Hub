from django.contrib import admin
from .models import conInvRegister , AdminRegister,StuRegister, pitchIdea,Schemes,investorPost

admin.site.register(conInvRegister)
admin.site.register(AdminRegister)
admin.site.register(StuRegister)
admin.site.register(pitchIdea)
admin.site.register(Schemes)
admin.site.register(investorPost)