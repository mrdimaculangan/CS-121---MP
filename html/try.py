from flask import Flask, render_template, url_for, request, redirect
import sqlite3
app = Flask(__name__)

db = sqlite3.connect('test.db')
cursor = db.cursor()
try:
	cursor.execute('CREATE TABLE users (username TEXT, password TEXT, fname TEXT, lname TEXT)')
except:
	print('table exists!!!')

db.commit()
cursor.close()

user = ""

@app.route("/home123")
def home():
	global user
	return render_template('index.html', user = user)

@app.route("/profile1234", methods = ['POST'])
def profile():
	fname = request.form.get('fname')
	lname = request.form.get('lname')
	name = fname + " " + lname

	return render_template('profile.html', name = name) 

@app.route("/login_page")
def render_login():
	return render_template('login.html') 

@app.route("/logging", methods = ['POST'])
def login():
	uname = request.form.get('uname')
	passw = request.form.get('pass')

	db = sqlite3.connect('test.db')
	cursor = db.cursor()
	temp = cursor.execute("SELECT * FROM users WHERE username = ? AND password = ?", [uname,passw]).fetchall() 
	db.commit()
	cursor.close()

	global user
	user = temp[0]

	return redirect(url_for("home"))
	

@app.route("/register_page")
def register_page():
	return render_template('register.html') 

@app.route("/registering", methods = ['POST'])
def register():
	fname = request.form.get('fname')
	lname = request.form.get('lname')
	uname = request.form.get('uname')
	passw = request.form.get('pass')

	db = sqlite3.connect('test.db')
	cursor = db.cursor()
	cursor.execute("INSERT INTO users VALUES (?,?,?,?)", [uname, passw, fname, lname]) 
	db.commit()
	cursor.close()

	return redirect(url_for('render_login'))