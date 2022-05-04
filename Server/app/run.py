import sqlite3
from flask import Flask, request, render_template
from flask_restful import Resource, Api


app = Flask(__name__)
api = Api(app)
app.config["DEBUG"] = True


# @app.route('/', methods=['GET'])
# def index():
#     return "index.html"


def get_db_connection():
    conn = sqlite3.connect('database.db')
    conn.row_factory = sqlite3.Row
    return conn


@app.route('/')
def index():
    conn = get_db_connection()
    posts = conn.execute('SELECT * FROM Posts').fetchall()
    conn.close()
    return render_template('index.html', posts=posts)


@app.errorhandler(404)
def page_not_found(e):
    return "<h1>404</h1><p>Page could not be found</p>"


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=105)
