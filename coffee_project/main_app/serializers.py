from rest_framework import serializers
from .models import Post  # Varsa diğer modelleri de burada içe aktarabilirsiniz
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name','password']
    
    def create(self, validated_data):
        # Şifreyi güvenli bir şekilde saklamak için make_password kullanıyoruz
        validated_data['password'] = make_password(validated_data['password'])
        return super().create(validated_data)