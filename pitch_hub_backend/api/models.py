from django.db import models

# Create your models here.
class StuRegister(models.Model):
    StuName =  models.CharField(max_length = 100 , default="Untitled Project")
    StuEmail =  models.CharField(max_length = 100, default="Untitled Project")
    StuPhone = models.IntegerField()
    userName = models.CharField(max_length = 200)
    password =  models.CharField(max_length = 100)
    about = models.CharField(max_length = 500)
    stu_id = models.IntegerField(default=0)

class AdminRegister(models.Model):
    userName = models.CharField(max_length = 200)
    password =  models.CharField(max_length = 100)
    
class conInvRegister(models.Model):
    Name =  models.CharField(max_length = 100 , default="Untitled Project")
    Email =  models.CharField(max_length = 100, default="Untitled Project")
    Phone = models.IntegerField()
    userName = models.CharField(max_length = 200)
    password =  models.CharField(max_length = 100)
    about = models.CharField(max_length = 500)    
    role = models.CharField(max_length = 100, default="Untitled Project")

class pitchIdea(models.Model):
    prjId =   models.IntegerField(default=0)
    domain =  models.CharField(max_length = 100 , default="Untitled Project")
    ideTitle =  models.CharField(max_length = 100, default="Untitled Project")
    abstract = models.CharField(max_length = 500, default="Untitled Project")
    IdeSynopsis = models.FileField(upload_to='uploads/synopsis')  
    stu_id = models.IntegerField()
    #patch request 
    InvestorName = models.CharField(max_length=100, null=True, blank=True)
    description = models.CharField(max_length = 500, default="Untitled Project")

class Schemes(models.Model):
    schemeName =  models.CharField(max_length = 100 , default="Untitled Project")
    schemeDetails =  models.CharField(max_length = 100, default="Untitled Project")
    schemeLink = models.CharField(max_length = 100, default="Untitled Project")
    schemeType = models.CharField(max_length = 100, default="Untitled Project")

class investorPost(models.Model):
    investorName =  models.CharField(max_length = 100 , default="Untitled Project")
    domain =  models.CharField(max_length = 100 , default="Untitled Project")
    discription = models.CharField(max_length = 500, default="Untitled Project")

    