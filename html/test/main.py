from flask import Flask, render_template, request, redirect, url_for
import sqlite3

app = Flask(__name__)

@app.route('/login', methods=['POST'])
def login():
    username = request.form.get('username')
    password = request.form.get('password')

    # Your database query to check if the user exists
    # Example using SQLite
    connection = sqlite3.connect('your_database.db')
    cursor = connection.cursor()
    cursor.execute('SELECT * FROM users WHERE username = ? AND password = ?', (username, password))
    user = cursor.fetchone()
    connection.close()

    if user:
        # User exists, redirect to a success page or perform other actions
        return redirect(url_for('success'))
    else:
        # User does not exist, render login page with an error message
        error_message = 'Invalid username or password.'
        return render_template('login.html', error_message=error_message)

if __name__ == '__main__':
	app.run(debug=True)