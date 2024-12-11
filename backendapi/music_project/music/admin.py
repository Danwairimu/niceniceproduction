# admin.py
from django.contrib import admin
from .models import Song

class SongAdmin(admin.ModelAdmin):
    # Fields to be displayed in the list view
    list_display = ('title', 'artist', 'uploaded_by', 'uploaded_at')
    
    # Add search functionality to search by title or artist
    search_fields = ('title', 'artist')
    
    # Add filters for filtering by uploaded_by
    list_filter = ('uploaded_by',)

    # Optionally, you can make the file field read-only or editable in admin interface
    # fields = ('title', 'artist', 'file', 'uploaded_by')
    
    # You can also set ordering (e.g., by the time the song was uploaded)
    ordering = ('-uploaded_at',)

# Register the Song model with the custom SongAdmin configuration
admin.site.register(Song, SongAdmin)
