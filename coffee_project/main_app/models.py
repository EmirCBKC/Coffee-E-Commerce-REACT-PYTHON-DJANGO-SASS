from django.db import models

class Post(models.Model):
    title = models.CharField(("Post Title"), max_length=50)
    postDesc = models.TextField(("Post Description"))
    postImg = models.ImageField((""), upload_to=None, height_field=None,width_field=None, max_length=None, null=True, blank=True)
    postTime = models.DateTimeField((""), auto_now=False, auto_now_add=False, null=True, blank=True)
    def __str__(self) -> str:
        return self.title