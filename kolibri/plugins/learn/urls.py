from django.urls import re_path

from .views import LearnView
from .views import MyDownloadsView
from .views import LocalLibraryView

urlpatterns = [
    re_path(r"^$", LearnView.as_view(), name="learn"),
    re_path(r"^my-downloads$", MyDownloadsView.as_view(), name="my_downloads"),
    re_path(r"^local-library$", LocalLibraryView.as_view(), name="local_library"),
]
