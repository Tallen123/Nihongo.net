from re import search
from typing import Coroutine
from flask import Flask, render_template, request, abort,session
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from flask.sessions import NullSession
from datetime import timedelta
from werkzeug.utils import redirect

textcolor = " "
PannelColor = " "
Color = " "
Hovercolor = " "

app = Flask(__name__)
app.secret_key = "W7adY5qnOGl0yLHwXG4nlaIUxxQeayvB10jqpgziHFYxywjUip4UEYXGnMk92aMTnvFCU1YB7iMIRXll"
cred = credentials.Certificate("nihongonet-ee832-firebase-adminsdk-nstiq-c19391f2d6.json")
firebase_admin.initialize_app(cred, {
  'projectId': "nihongonet-ee832",
})

db = firestore.client()

@app.before_request
def make_session_permanent():
    session.permanent = True

@app.route('/')
def landing_page():
    return render_template('LandingPage.html',textcolor = textcolor, PannelColor = PannelColor,Color=Color,Hovercolor=Hovercolor)

@app.route('/Account/Logout')
def Logout():
    session.clear()
    return render_template('LandingPage.html',textcolor = textcolor, PannelColor = PannelColor,Color=Color,Hovercolor=Hovercolor)

@app.route('/Hiragana')
def Hiragana():
    return render_template('Hiragana.html',textcolor = textcolor, PannelColor = PannelColor,Color=Color,Hovercolor=Hovercolor)

@app.route('/Katakana')
def Katakana():
    return render_template('Katakana.html',textcolor = textcolor, PannelColor = PannelColor,Color=Color,Hovercolor=Hovercolor)

@app.route('/Kanji/N5')
def Kanji_N5():
    return render_template('N5.html',Color=Color)

@app.route('/Kanji/N4')
def Kanji_N4():
    return render_template('N4.html',Color=Color)

@app.route('/Kanji/N3')
def Kanji_N3():
    return render_template('N3.html',Color=Color)

@app.route('/Kanji/N2')
def Kanji_N2():
    return render_template('N2.html',Color=Color)

@app.route('/Kanji/N1')
def Kanji_N1():
    return render_template('N1.html',Color=Color)

@app.errorhandler(400)
def page_not_found(e):
    return render_template('LandingPage.html',Color=Color)

@app.route('/Settings', methods=['POST', 'GET'])#Fix Settings not displaying
def Settings():
    if 'username' in session:
        Color =  request.form['Color']
        doc_ref = db.collection(u'Users').document(session['username']).collection(session['username']).document(session['username'])
        doc_ref.update({
        u'BackgroundColor': Color})
    else:
        return redirect('/Account/SignUp')
    return render_template('Settings.html',Color=Color,name = session['username'])


@app.route('/Account/Login', methods=['POST', 'GET'])
def AccountLogin():
    if request.form:
        username = request.form['Username']
        password = request.form['Password']
        doc_ref = db.collection(u'Users').document(username).collection(username).document(username)
        doc = doc_ref.get()
        if doc.exists:
            dbpass = doc.to_dict()['password']
            if password == dbpass:
                session['username'] = username
                return render_template('LandingPage.html',textcolor = textcolor, PannelColor = PannelColor,Color=Color,Hovercolor=Hovercolor)
    return render_template('Account.html',Page_Name="Login",Page_oposite = "Sign Up Page",textcolor = textcolor, PannelColor = PannelColor,Color=Color,Hovercolor=Hovercolor)



@app.route('/Account/SignUp', methods=['POST', 'GET'])
def AccountSignUp():
    if request.form:
        username = request.form['Username']
        password = request.form['Password']
        doc_ref = db.collection(u'Users').document(username).collection(username).document(username)
        doc = doc_ref.get()
        if not doc.exists:
            doc_ref.set({
            u'username': username,
            u'password': password,
            u'BackgroundColor': "",
            })
            session['username'] = username
    return render_template('Account.html',Page_Name="Sign Up",Page_oposite = "Login page",Color=Color)

if __name__ == '__main__':
    app.run(debug = True)