from django.apps import AppConfig


class UsersAppConfig(AppConfig):

    name = "konwoogram.users"
    verbose_name = "Users"

    def ready(self):
        try:
            """Override this to put in:
            Users system checks
            Users signal registration
            """
            from .signals import user_signed_up
            # import users.signals  # noqa F401

        except ImportError:
            pass
