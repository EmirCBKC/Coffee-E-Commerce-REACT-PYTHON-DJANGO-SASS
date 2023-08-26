from rest_framework import serializers
from .models import Post  # Varsa diğer modelleri de burada içe aktarabilirsiniz

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'