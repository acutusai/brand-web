from django.urls import path
from .views import get_all_blogs, get_blog

urlpatterns = [
    path('idea/', get_all_blogs, name='get_all_blogs'),  
    path('blog/<int:blog_id>/', get_blog, name='get_blog'),  
]
