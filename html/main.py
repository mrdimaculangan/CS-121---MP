from flask import Flask, render_template, url_for, request, redirect, session
import sqlite3

app = Flask(__name__)

app.secret_key = 'your_secret_key_here'

db = sqlite3.connect('users.db')
c = db.cursor()

try:
	c.execute('CREATE TABLE users (fullname TEXT, email TEXT, username TEXT, password TEXT, bday TEXT, bmonth TEXT, byear TEXT, bio TEXT, mobile TEXT, house TEXT, street TEXT, brgy TEXT, city TEXT, region TEXT, zipc TEXT)')
except:
	print('table exists!!!')

	db.commit()
	c.close()

@app.route('/')
def home():
	return render_template('login.html')

@app.route('/index')
def index():
    return render_template('index.html')

@app.route('/profile')
def profile():
    if 'logged_in_user' not in session:
        return redirect(url_for('home'))

    username = session['logged_in_user']

    db = sqlite3.connect('users.db')
    c = db.cursor()
    c.execute('SELECT * FROM users WHERE username = ?', [username])
    user_data = c.fetchone()
    db.close()

    if user_data is not None:
        # Pass the user data to the template for rendering
        return render_template('profile(display).html', user_data=user_data)
    else:
        return render_template('profile(display).html', error="User not found")

@app.route('/profile_edit')
def profile_edit():
    return render_template('profile.html')

@app.route('/address_edit')
def address_edit():
    return render_template('address.html')

@app.route('/shopping_cart')
def shopping_cart():
	return render_template('shopping_cart.html')

@app.route('/shipping_information')
def shipping_information():
	return render_template('shipping_information.html')

@app.route('/logout')
def logout():
	return redirect(url_for('home'))

@app.route('/signup_page')
def signup_page():
	return render_template('signup.html')

@app.route('/address')
def address():
    if 'logged_in_user' not in session:
        return redirect(url_for('home'))

    username = session['logged_in_user']

    db = sqlite3.connect('users.db')
    c = db.cursor()
    c.execute('SELECT house, street, brgy, city, region, zipc FROM users WHERE username = ?', [username])
    address_data = c.fetchone()
    db.close()

    if address_data is not None:
        # Pass the address data to the template for rendering
        return render_template('address(display).html', address_data=address_data)
    else:
        return render_template('address(display).html', error="User not found")

@app.route('/update_profile', methods=['POST'])
def update_profile():
    if 'logged_in_user' not in session:
        return redirect(url_for('home'))

    username = session['logged_in_user']

    db = sqlite3.connect('users.db')
    c = db.cursor()
    c.execute('SELECT * FROM users WHERE username = ?', [username])
    existing_user_data = c.fetchone()

    if existing_user_data is not None:
        new_username = request.form.get('inputUsername')
        new_name = request.form.get('inputName')
        new_email = request.form.get('inputEmail')
        new_phonenumber = request.form.get('inputphonenumber')
        new_birthday_month = request.form.get('month1')
        new_birthday_day = request.form.get('day')
        new_birthday_year = request.form.get('yr')
        new_bio = request.form.get('inputbio')

        # Handle empty values
        new_username = new_username if new_username else existing_user_data[2]
        new_name = new_name if new_name else existing_user_data[0]
        new_email = new_email if new_email else existing_user_data[1]
        new_phonenumber = new_phonenumber if new_phonenumber else existing_user_data[8]
        new_birthday_month = new_birthday_month if new_birthday_month else existing_user_data[4]
        new_birthday_day = new_birthday_day if new_birthday_day else existing_user_data[5]
        new_birthday_year = new_birthday_year if new_birthday_year else existing_user_data[6]
        new_bio = new_bio if new_bio else existing_user_data[7]

        c.execute('UPDATE users SET username=?, fullname=?, email=?, mobile=?, bmonth=?, bday=?, byear=?, bio=? WHERE username=?',
                  (new_username, new_name, new_email, new_phonenumber, new_birthday_month, new_birthday_day, new_birthday_year, new_bio, username))
        db.commit()
        db.close()

        return redirect(url_for('home'))
    else:
        return render_template('profile(display).html', error="User not found")

@app.route('/update_address', methods=['POST'])
def update_address():
    if 'logged_in_user' not in session:
        return redirect(url_for('home'))

    username = session['logged_in_user']

    db = sqlite3.connect('users.db')
    c = db.cursor()
    c.execute('SELECT * FROM users WHERE username = ?', [username])
    existing_user_data = c.fetchone()

    if existing_user_data is not None:
        new_house_number = request.form.get('inputhousenumber')
        new_street = request.form.get('inputstreet')
        new_barangay = request.form.get('inputbarangay')
        new_city = request.form.get('inputcity')
        new_region = request.form.get('inputregion')
        new_zip_code = request.form.get('inputzip')

        # Handle empty values
        new_house_number = new_house_number if new_house_number else existing_user_data[9]
        new_street = new_street if new_street else existing_user_data[10]
        new_barangay = new_barangay if new_barangay else existing_user_data[11]
        new_city = new_city if new_city else existing_user_data[12]
        new_region = new_region if new_region else existing_user_data[13]
        new_zip_code = new_zip_code if new_zip_code else existing_user_data[14]

        c.execute('UPDATE users SET house=?, street=?, brgy=?, city=?, region=?, zipc=? WHERE username=?',
                  (new_house_number, new_street, new_barangay, new_city, new_region, new_zip_code, username))
        db.commit()
        db.close()

        return redirect(url_for('home'))
    else:
        return render_template('address(display).html', error="User not found")


def set_default_values(profile_data):
    return tuple("N/A" if value is None else value for value in profile_data)

@app.route('/signup', methods=['POST'])
def signup():
    fname = request.form.get('fullname')
    email = request.form.get('email')
    uname = request.form.get('username')
    passw = request.form.get('password')
    confirm_pass = request.form.get('confirm')

    # Default values for additional fields
    bday, bmonth, byear, bio, mobile, house, street, brgy, city, region, zipc = ("N/A",) * 11

    if passw != confirm_pass:
        return render_template('signup.html', error="Passwords do not match")

    db = sqlite3.connect('users.db')
    c = db.cursor()

    # Check if email is already in use
    c.execute("SELECT * FROM users WHERE email=?", [email])
    existing_email = c.fetchone()
    if existing_email:
        c.close()
        return render_template('signup.html', error="Email is already in use.")

    # Check if username is already taken
    c.execute("SELECT * FROM users WHERE username=?", [uname])
    existing_user = c.fetchone()
    if existing_user:
        c.close()
        return render_template('signup.html', error="Username is already taken.")

    # Insert user into the database
    c.execute("INSERT INTO users (fullname, email, username, password, bday, bmonth, byear, bio, mobile, house, street, brgy, city, region, zipc) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
              (fname, email, uname, passw, bday, bmonth, byear, bio, mobile, house, street, brgy, city, region, zipc))
    db.commit()
    c.close()

    return redirect(url_for('home'))

@app.route('/logging', methods=['POST'])
def logging():
    uname = request.form.get('username')
    pword = request.form.get('pass')

    session['logged_in_user'] = uname

    if uname == '' or pword == '':
        return render_template('login.html', error_message="Enter username and password")

    db = sqlite3.connect('users.db')
    c = db.cursor()
    c.execute('SELECT * FROM users WHERE username = ?', [uname])
    user_data = c.fetchone()
    db.close()

    if user_data is not None and pword == user_data[3]:
        session['logged_in_user'] = uname
        return render_template('index.html')

    session['login_error'] = 'Invalid username or password'
    print("Login failed.")
    return redirect(url_for('home'))

@app.route('/change_password', methods=['POST'])
def change_password():
    current_password = request.form.get('current')
    new_password = request.form.get('new')

    if 'logged_in_user' not in session:
        return redirect(url_for('home'))

    db = sqlite3.connect('users.db')
    c = db.cursor()

    c.execute("SELECT * FROM users WHERE username=?", [session['logged_in_user']])
    user_data = c.fetchone()

    if user_data is not None and current_password == user_data[3]:
        c.execute("UPDATE users SET password=? WHERE username=?", [new_password, session['logged_in_user']])
        db.commit()
        db.close()
        return redirect(url_for('profile'))
    else:
        db.close()
        return render_template('profile(display).html', error="Invalid current password")

@app.route('/edit_profileinfo', methods=['POST'])
def edit_profileinfo():
    fname = request.form.get('inputName')
    email = request.form.get('inputEmail')
    uname = request.form.get('inputUsername')
    bday = request.form.get('b-date')
    bio = request.form.get('inputBio')
    profilepic = request.form.get('photo')

    db = sqlite3.connect('users.db')
    c = db.cursor()
    c.execute("INSERT INTO users VALUES (?,?,?,?,?,?)", [fname, email, uname, bday, bio, profilepic ])
    db.commit()
    c.close()

def verify_password(username, entered_password):
    with sqlite3.connect('users.db') as conn:
        c = conn.cursor()
        c.execute('SELECT password FROM users WHERE username = ?', (username,))
        stored_password = c.fetchone()

    return stored_password and entered_password == stored_password[0]

@app.route('/delete_account', methods=['POST'])

def delete_account():
    password = request.form.get('passfordelete')

    username = session.get('logged_in_user')

    if not username:
        return redirect(url_for('profile'))

    if not verify_password(username, password):
        return redirect(url_for('profile'))

    with sqlite3.connect('users.db') as conn:
        c = conn.cursor()
        c.execute('DELETE FROM users WHERE username = ?', (username,))
        conn.commit()

    session.pop('logged_in_user')
    return redirect(url_for('home'))  

@app.route('/angels_whisper')
def angels_whisper():
    return render_template('angels_whisper.html')

@app.route('/celestial_keys')
def celestial_keys():
    return render_template('celestial_keys.html')

@app.route('/diamond_heart')
def diamond_heart():
    return render_template('diamond_heart.html')

@app.route('/fairyqueen')
def fairyqueen():
    return render_template('fairyqueen.html')

@app.route('/flower_petals')
def flower_petals():
    return render_template('flower_petals.html')

@app.route('/golden_time')
def golden_time():
    return render_template('golden_time.html')

@app.route('/heart_key')
def heart_key():
    return render_template('heart_key.html')

@app.route('/mariposa')
def mariposa():
    return render_template('mariposa.html')

@app.route('/mary_ribbons')
def mary_ribbons():
    return render_template('mary_ribbons.html')

@app.route('/music_to_my_ears')
def music_to_my_ears():
    return render_template('music_to_my_ears.html')

@app.route('/penguin_pin')
def penguin_pin():
    return render_template('penguin_pin.html')

@app.route('/perla_de_oriente')
def perla_de_oriente():
    return render_template('perla_de_oriente.html')

@app.route('/pirate_king')
def pirate_king():
    return render_template('pirate_king.html')

@app.route('/princess_debut')
def princess_debut():
    return render_template('princess_debut.html')

@app.route('/queens_treasure')
def queens_treasure():
    return render_template('queens_treasure.html')

@app.route('/raiden_shogun')
def raiden_shogun():
    return render_template('raiden_shogun.html')

@app.route('/ruby_valentine')
def ruby_valentine():
    return render_template('ruby_valentine.html')

@app.route('/sunflower_bloom')
def sunflower_bloom():
    return render_template('sunflower_bloom.html')

@app.route('/sweet_strawberry')
def sweet_strawberry():
    return render_template('sweet_strawberry.html')

@app.route('/time_teller')
def time_teller():
    return render_template('time_teller.html')

@app.route('/winterwonder')
def winterwonder():
    return render_template('winterwonder.html')

@app.route('/pride_watch')
def pride_watch():
    return render_template('pride_watch.html')

@app.route('/adarna_hairpin')
def adarna_hairpin():
    return render_template('adarna_hairpin.html')

@app.route('/sweet_victoria')
def sweet_victoria():
    return render_template('sweet_victoria.html')

if __name__ == '__main__':
	app.run(debug=True)
