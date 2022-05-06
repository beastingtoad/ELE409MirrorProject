from flask import Blueprint, render_template


views = Blueprint('views', __name__)    # creates a prefix of /views/...

html_var = "index.html"     # needs refresh


# Routes

@views.route('/', methods=['GET', 'POST'])
def index():
    title = "Login Screen"
    return render_template(html_var, title=title)


@views.route('/screen1/')
def screen1():
    return render_template('screen1.html')


@views.route('/screen2/')
def screen2():
    return render_template('screen2.html')


@views.errorhandler(404)
def page_not_found(e):
    return "<h1>404</h1><p>Page could not be found</p>"
