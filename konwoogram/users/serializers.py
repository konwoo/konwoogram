from rest_framework import serializers
from . import models
from konwoogram.images import serializers as images_serializsers

class UserProfileSerializer(serializers.ModelSerializer):

    images = images_serializsers.CountImageSerializer(many=True)

    class Meta:
        model = models.User
        fields = (
            'username',
            'name',
            'bio',
            'website',
            'post_count',
            'followers_count',
            'following_count',
            'images',
        )

class ListUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.User
        fields = (
            'id',
            'profile_image',
            'username',
            'name',
        )