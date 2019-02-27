from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from . import models, serializers
# Create your views here.

class Notifications(APIView):

    def get(self, request, format=None):
        
        user = request.user

        notification = models.Notification.objects.filter(to=user)

        serializer = serializers.NotificationSerializer(notification, many=True)

        return Response(data=serializer.data, status=status.HTTP_201_CREATED)

def create_notification(creator, to, notification_type,image = None, comment = None):

    print(creator, to, notification_type, image, comment)

    notification = models.Notification.objects.create(
        creator=creator,
        to=to,
        notification_type=notification_type,
        image=image,
        comment=comment
    )

    notification.save()
