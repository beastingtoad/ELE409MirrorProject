import os.path
from flask import Flask, render_template, redirect
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Api, Resource
from datetime import datetime


def create_app(test_config=None):
    # Create app:
    app = Flask(__name__, instance_relative_config=True)

    # Configure app:
    app.config["DEBUG"] = True
    app.config.from_mapping(
        SECRET_KEY='dev',
        DATABASE=os.path.join(app.instance_path, 'app.sqlite')
        )
    app.config['SQLALCHEMY_URI'] = 'sqlite:///database.db'
    """
    if test_config is None:
        # load the instance config, when not testing
        app.config.from_mapping(test_config)
    try:
        # ensure the instance folder exists
        os.makedirs(app.instance_path)
    except OSError:
        pass

    # Initialize database:
    db = SQLAlchemy(app)

    # Create db model:
    class Users(db.Model):
        user_id = db.Column(db.Integer, primary_key=True)
        username = db.Column(db.String(200), nullable=False)
        date_created = db.Column(db.DateTime, default=datetime.utcnow)

    # Create function to return string when we add new entry
        def __repr__(self):
            return '<User %r>' % self.user_id
    """
    # Routes
    @app.route('/', methods=['GET', 'POST'])
    def index():
        title = "Login Screen"
        return render_template('index.html', title=title)

    @app.route('/screen1/')
    def screen1():
        return render_template('screen1.html')

    @app.route('/screen2/')
    def screen2():
        return render_template('screen2.html')

    @app.errorhandler(404)
    def page_not_found(e):
        return "<h1>404</h1><p>Page could not be found</p>"

    # Wrap app (application) with an API
    api = Api(app)

    return app


if __name__ == '__main__':
    create_app()
