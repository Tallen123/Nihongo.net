from typing import Coroutine
from flask import Flask, render_template, request, abort
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from flask.sessions import NullSession
app = Flask(__name__)
cookie = ""
cred = credentials.Certificate("nihongonet-ee832-firebase-adminsdk-nstiq-c19391f2d6.json")
firebase_admin.initialize_app(cred, {
  'projectId': "nihongonet-ee832",
})

db = firestore.client()

@app.route('/')
def landing_page():
    return render_template('LandingPage.html')

@app.route('/Hirigana')
def Hirigana():
    return render_template('Hirigana.html')

@app.route('/Katakana')
def Katakana():
    return render_template('Katakana.html')

@app.route('/Kanji/N5')
def Kanji_N5():
    return render_template('N5.html')

@app.route('/Kanji/N4')
def Kanji_N4():
    return render_template('N4.html')

@app.route('/Kanji/N3')
def Kanji_N3():
    return render_template('N3.html')

@app.route('/Kanji/N2')
def Kanji_N2():
    return render_template('N2.html')

@app.route('/Kanji/N1')
def Kanji_N1():
    return render_template('N1.html')

@app.errorhandler(400)
def page_not_found(e):
    return render_template('Settings.html')

@app.route('/Settings', methods=['POST', 'GET'])
def Settings():
    if cookie == " ":
        textcolor = request.form['textcolor']
        PannelColor = request.form['PannelColor']
        Color =  request.form['Color']
        Hovercolor = request.form['Hovercolor']
        doc_ref = db.collection(u'Users').document(u'Username').collection(u'Username').document(u'Username')
        doc_ref.add({
        u'Text-Color': textcolor,
        u'Pannel-Color': PannelColor,
        u'Background-Color': Color,
        u'Hover-Color': Hovercolor,
})
    else:
        abort(400)
    return render_template('Settings.html')

@app.route('/Account/Login', methods=['POST', 'GET'])
def Account():
    return render_template('Account.html',Page_Name="Login")

@app.route('/Account/SignUp', methods=['POST', 'GET'])
def AccountSignUp():
    if request.form:
        username = request.form['Username']
        password = request.form['Password']
        doc_ref = db.collection(u'Users').document(username).collection(username).document(username)
        doc_ref.set({
        u'username': username,
        u'password': password
        })
    else:
        render_template('Account.html',Page_Name="Sign Up")
    return render_template('Account.html',Page_Name="Sign Up")

if __name__ == '__main__':
    app.run(debug = True)