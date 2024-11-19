from rest_framework import serializers
from .models import conInvRegister,StuRegister,AdminRegister, pitchIdea ,Schemes,investorPost

class conInvSerializer(serializers.ModelSerializer):
    class Meta: 
        model = conInvRegister  
        fields = '__all__'  

class StuSerializer(serializers.ModelSerializer):
    class Meta: 
        model = StuRegister  
        fields = '__all__'  

class AdminSerializer(serializers.ModelSerializer): 
    class Meta:
        model = AdminRegister   
        fields = '__all__'


class pitchSerializer(serializers.ModelSerializer): 
    class Meta:
        model =  pitchIdea
        fields = '__all__'

class schemeSerializer(serializers.ModelSerializer): 
    class Meta:
        model =  Schemes
        fields = '__all__'   

class investorSerializer(serializers.ModelSerializer): 
    class Meta:
        model =  investorPost
        fields = '__all__'             