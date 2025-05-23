from django.db import models
from users.models import User

class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    items = models.TextField(help_text="List of items and quantities, stored as plain text.")
    total_price = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Order #{self.id} by {self.user.username}"