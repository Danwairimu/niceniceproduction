from rest_framework import status, permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Song
from .serializers import SongSerializer

class SongList(APIView):
    # permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        songs = Song.objects.all()
        serializer = SongSerializer(songs, many=True)
        return Response(serializer.data)

class SongUpload(APIView):
    # permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        serializer = SongSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(uploaded_by=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class SongDownload(APIView):
    # permission_classes = [permissions.IsAuthenticated]

    def get(self, request, pk):
        try:
            song = Song.objects.get(pk=pk)
            response = Response(content=song.file.read(), content_type='audio/mpeg')
            response['Content-Disposition'] = f'attachment; filename="{song.title}.mp3"'
            return response
        except Song.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)