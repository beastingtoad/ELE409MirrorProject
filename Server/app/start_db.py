from flask_sqlalchemy import SQLAlchemy
import click
from flask import current_app, g
from flask.cli import with_appcontext


# Initialize database:
db = SQLAlchemy()


def init_app(app):
    """Teardown after request command. New added function call for app."""
    app.teardown_appcontext(close_db())
    app.cli.add_command(init_db_command)


@click.command('init-db')
@with_appcontext
def init_db_command():
    """Clear the existing data and create new tables."""
    init_db()
    click.echo('Initialized the database')      # show message to user


def get_db():
    """Creates proxy object to send data to background thread"""
    if 'db' not in g:       # g: namespace object that can store resources for request
        g.db = sqlite3.connect(current_app.config[DATABASE],    # current_app = proxy
                               detect_types=sqlite3.PARSE_DECLTYPES
                               )    # parsed output will not contain attribute types
        g.db.row_factory = sqlite3.Row      # .row is better
    return g.db


def close_db(exception=None):
    db = g.pop('db', None)      # pop db or return None. If left unspecified=KeyError
    if db is not None:
        db.close()              # if None, then pop worked successfully
