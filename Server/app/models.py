from start_db import db
from datetime import datetime


# Create db model:
class Users(db.Model):
    user_id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(200), nullable=False)
    date_created = db.Column(db.DateTime, default=datetime.utcnow)

    # Create function to return string when we add new entry
    def __repr__(self):
        return '<User %r>' % self.user_id
