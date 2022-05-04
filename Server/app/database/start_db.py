import sqlite3
import click


connection = sqlite3.connect('database.db')


with open('schema.sql') as f:
    connection.executescript(f.read())

cur = connection.cursor()

cur.execute("INSERT INTO Users(username, pass) VALUES (?, ?)",
            ('ADMIN', 'password')
            )

cur.execute("INSERT INTO Posts(title, description) VALUES (?, ?)",
            ('First Post', 'Content for the first post')
            )

cur.execute("INSERT INTO Posts (title, description) VALUES (?, ?)",
            ('Second Post', 'Content for the second post')
            )

connection.commit()

for row in cur.execute('SELECT * FROM Posts'):
    print(row)

connection.close()
