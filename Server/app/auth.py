from __run__ import get_db_connection
from flask import Flask, request, redirect, url_for, flash, render_template
from werkzeug.security import generate_password_hash


app = Flask(__name__)


@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        db = get_db_connection()
        error = None

        if not username:
            error = 'Username is required.'
        elif not password:
            error = 'Password is required.'

        if error is None:
            try:
                db.execute("INSERT INTO User (username, password) VALUES (?, ?)",
                           (username, generate_password_hash(password))
                           )
                db.commit()
            except db.IntegrityError:
                error = "Username, {}, is already taken.".format(username)
        else:
            return redirect(url_for("auth.log"))

        flash(error)

    return render_template('auth/register.html')
