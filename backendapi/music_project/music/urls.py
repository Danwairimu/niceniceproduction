from django.urls import path,include
from .views import SongList, SongUpload, SongDownload
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('songs/', SongList.as_view(), name='song-list'),
    path('songs/upload/', SongUpload.as_view(), name='song-upload'),
    path('songs/<int:pk>/download/', SongDownload.as_view(), name='song-download'),
    path('auth/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]