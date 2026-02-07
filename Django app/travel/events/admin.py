from django.contrib import admin
from .models import Event

@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ('title', 'location', 'date', 'capacity')
    search_fields = ('title', 'location')
    list_filter = ('date', 'location')
    ordering = ('-date',)
