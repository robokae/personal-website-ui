import os
from app import create_app, db
from app.models import Post
from flask_migrate import Migrate

config = os.environ.get('FLASK_CONFIG')

app = create_app(config or 'default')
migrate = Migrate(app, db)

