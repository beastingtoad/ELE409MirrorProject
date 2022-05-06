import os.path
from flask import Flask, render_template, redirect
from flask_sqlalchemy import SQLAlchemy
import flask_restful
from flask_restful import Api, Resource
from datetime import datetime


def create_app(test_config=None):
    # Create app:
    app = Flask(__name__, instance_relative_config=True)

    # Configure app:
    app.config["DEBUG"] = True
    app.config['SECRET_KEY'] = 'dev'
    app.config.from_mapping(
        SECRET_KEY='dev',
        DATABASE=os.path.join(app.instance_path, 'app.sqlite')
        )
    app.config['SQLALCHEMY_URI'] = 'sqlite:///database.db'

    from .views import views
    from .auth import auth
    # Create Routes / Views
    app.register_blueprint(views, url_prefix='/')
    app.register_blueprint(auth, url_prefix='/')

    # Wrap app (application) with an API
    api = Api(app)

    return app

