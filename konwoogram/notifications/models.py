from django.db import models

from konwoogram.users import models as user_models
from konwoogram.images import models as images_models
# Create your models here.

class Notification(images_models.TimeStampModel):

    TYPE_CHOICES = (
        ('like', 'Like'),
        ('comment', 'Comment'),
        ('follow', 'Follow'),
    )

    creator = models.ForeignKey(user_models.User, on_delete=models.PROTECT, related_name='creator')
    to = models.ForeignKey(user_models.User, on_delete=models.PROTECT, related_name='to')
    notification_type = models.CharField(max_length=20, choices=TYPE_CHOICES)
    image = models.ForeignKey(images_models.Image, on_delete=models.PROTECT, null=True, blank=True)