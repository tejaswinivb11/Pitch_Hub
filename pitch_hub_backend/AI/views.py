import openai
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.conf import settings
import logging

# Set up OpenAI API key
openai.api_key = settings.OPENAI_API_KEY

# Initialize logging
logger = logging.getLogger(__name__)

class ChatbotAPIView(APIView):
    def post(self, request):
        user_message = request.data.get("message")
        
        # Check if a message was provided
        if not user_message:
            return Response({"error": "No message provided."}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            # Use the latest API method for chat completion
            response = openai.ChatCompletion.create(
                model="gpt-3.5-turbo",
                messages=[{"role": "user", "content": user_message}]
            )
            answer = response['choices'][0]['message']['content']
            return Response({"answer": answer}, status=status.HTTP_200_OK)
        
        except Exception as e:
            # General error handling if specific OpenAI error classes are not available
            logger.error(f"An error occurred: {str(e)}")
            return Response({"error": "An unexpected error occurred. Please try again later."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
