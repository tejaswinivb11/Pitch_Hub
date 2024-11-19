from django.http import Http404
from rest_framework.response import Response
from .models import conInvRegister,StuRegister,AdminRegister,pitchIdea,Schemes,investorPost
from .serializer import conInvSerializer,StuSerializer,AdminSerializer,pitchSerializer,schemeSerializer,investorSerializer
from rest_framework.decorators import api_view
from rest_framework.exceptions import AuthenticationFailed
from django.contrib.auth.hashers import check_password
from rest_framework import status
from django.views.decorators.csrf import csrf_exempt

@api_view(['GET', 'POST'])
def conInvRegisterView(request):
    """
    GET: Returns all consultant or investor registers available in the database based on the role.
    POST: Creates a new consultant or investor register in the database.

    For GET: Consultant/Investor gets all consultant/investor registers with the respective role.
    For POST: Consultant/Investor posts the Name, Email, Phone, userName, password, about, and role.
    """
    if request.method == 'GET':
        role = request.query_params.get('role')
        if not role:
            return Response({"error": "role is required in the query parameters"}, status=status.HTTP_400_BAD_REQUEST)
        
        users = conInvRegister.objects.filter(role=role)
        serializer = conInvSerializer(users, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = conInvSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def conInvLoginView(request):
    """
    Handles the login process for consultants and investors.

    POST: Authenticates a user using email and password. If the user is not found
    or the password is incorrect, raises an AuthenticationFailed exception.
    Upon successful authentication, returns a success message.

    Raises:
        AuthenticationFailed: If the user is not found or the password is incorrect.
    """
    data = request.data
    userName = data.get('userName')
    password = data.get('password')

    # Check if the username and password match a registered user
    try:
        user = conInvRegister.objects.get(userName=userName, password=password)
        return Response({'message': 'Login successful'}, status=status.HTTP_200_OK)
    except conInvRegister.DoesNotExist:
        return Response({'error': 'Invalid username or password'}, status=status.HTTP_401_UNAUTHORIZED)
    

@api_view(['POST'])
def stuRegisterView(request):
    """
    Handles the registration process for students.

    POST: Registers a new student with the provided data. If the data is valid, 
    the student information is saved into the database.

    Args:
        request (Request): The HTTP request object containing student data 
                           in the request data.

    Returns:
        Response: A response object containing the student data if registration 
                  is successful or an error message if the data is invalid.
    """
    serializer = StuSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data,status=status.HTTP_201_CREATED)
    return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def stuLoginView(request):
    data = request.data
    userName = data.get('userName')
    password = data.get('password')

    # Check if the username and password match a registered user
    try:
        user = StuRegister.objects.get(userName=userName, password=password)
        return Response({'message': 'Login successful'}, status=status.HTTP_200_OK)
    except StuRegister.DoesNotExist:
        return Response({'error': 'Invalid username or password'}, status=status.HTTP_401_UNAUTHORIZED)
    
@api_view(['POST'])
def adminRegisterView(request):
    serializer = AdminSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data,status=status.HTTP_201_CREATED)
    return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def adminLoginView(request):
    data = request.data
    userName = data.get('userName')
    password = data.get('password')

    # Check if the username and password match a registered user
    try:
        user = AdminRegister.objects.get(userName=userName, password=password)
        return Response({'message': 'Login successful'}, status=status.HTTP_200_OK)
    except AdminRegister.DoesNotExist:
        return Response({'error': 'Invalid username or password'}, status=status.HTTP_401_UNAUTHORIZED)


@api_view(['GET', 'POST'])
def schemesView(request):
    """
    GET: Returns all schemes available in the database based on the schemeType.
    POST: Creates a new scheme in the database.

    Admin post the scheme name and description.
    Get for home page
    """
    if request.method == 'GET':
        schemeType = request.query_params.get('schemeType')
        if not schemeType:
            return Response({"error": "schemeType is required in the query parameters"}, status=status.HTTP_400_BAD_REQUEST)
        schemes = Schemes.objects.filter(schemeType=schemeType)
        serializer = schemeSerializer(schemes, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = schemeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET','POST'])
def investorPostView(request):
    """
    GET: Returns all investor posts available in the database.
    POST: Creates a new investor post in the database.

    Investor post the domain, name and description of the project.
    Get for home page
    """
    if request.method == 'GET':
        posts = investorPost.objects.all()
        serializer = investorSerializer(posts, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = investorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



@api_view(['GET', 'POST', 'PATCH'])
def pitchIdeaView(request):
    """
    GET: Returns all pitch ideas available in the database based on the domain.
    POST: Creates a new pitch idea in the database.
    PATCH: Updates a pitch idea in the database.

    For GET: Admin gets all pitch ideas with the details of the student who has posted the idea.
    For POST: Student posts the domain, title, abstract, and synopsis of the project.
    For PATCH: Admin updates the pitch idea with the respective project id and updates InvestorID and description.
    """

    if request.method == 'GET':
        domain = request.query_params.get('domain')
        if not domain:
            return Response({"error": "domain is required in the query parameters"}, status=status.HTTP_400_BAD_REQUEST)

        pitch = pitchIdea.objects.filter(domain=domain)
        serializer = pitchSerializer(pitch,many=True)
        for p in serializer.data:
            stu = StuRegister.objects.filter(stu_id=p['stu_id']).first()
            p['stuName'] = stu.StuName
            p['stuEmail'] = stu.StuEmail
            p['stuPhone'] = stu.StuPhone
        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = pitchSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    """
    http://127.0.0.1:8000/api/viewIdeas/?projectID=3&investorID=abcd@123
    PATCH: Updates a pitch idea in the database.
    
    For PATCH: Updates the pitch idea with the respective project id and updates InvestorName
               with the name from `conInvRegister` using `investorID` from the URL.
    """
    # Retrieve the investorID and projectID from the query parameters in the URL
    investorID = request.query_params.get('investorID')  # Retrieve the investorID from the URL query params
    project_id = request.query_params.get('projectID')  # Retrieve the projectID from the URL query params

    if not investorID or not project_id:
        return Response({"error": "investorID and projectID are required in the query parameters"}, status=status.HTTP_400_BAD_REQUEST)

    # Retrieve the pitch idea by project_id
    pitch = pitchIdea.objects.filter(prjId=project_id).first()
    if not pitch:
        raise Http404("Pitch idea not found")

    # Retrieve the investor from `conInvRegister` using investorID from URL
    inv = conInvRegister.objects.filter(userName=investorID).first()
    if inv is None:
        return Response({"error": "Investor not found"}, status=status.HTTP_404_NOT_FOUND)

    # Prepare the data for updating
    data = request.data.copy()  # Create a mutable copy of request data
    data['InvestorName'] = inv.Name  # Set InvestorName using the name from `conInvRegister`
    
    # Perform partial update with new data
    serializer = pitchSerializer(pitch, data=data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
