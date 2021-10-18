from re import search
import re
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
    session['BackgroundColor'] = "#663399"

@app.route('/')
def landing_page():
    return render_template('LandingPage.html',Color=session['BackgroundColor'])

@app.route('/Numbers')
def Numbers():
    return render_template('Numbers.html',Color=session['BackgroundColor'])#Numbers Page

@app.route('/Phonetics')
def Phonetics():
    return render_template('Phonetics.html',Color=session['BackgroundColor'])#Phonetics Page


class HiraganaKatakana:
    @app.route('/Hiragana')
    def Hiragana():
        return render_template('Hiragana.html',Color=session['BackgroundColor'])#Hiragana Page

    @app.route('/Katakana')
    def Katakana():
        return render_template('Katakana.html',Color=session['BackgroundColor'])#Katakana Page

class Kanji:
    @app.route('/Kanji/N5')
    def Kanji_N5():
        return render_template('KanjiN5.html',Color=session['BackgroundColor'])#N5 kanji page

    @app.route('/Kanji/N4')
    def Kanji_N4():
        return render_template('KanjiN4.html',Color=session['BackgroundColor'])#N4 kanji page

    @app.route('/Kanji/N3')
    def Kanji_N3():
        return render_template('KanjiN3.html',Color=session['BackgroundColor'])#N3 kanji page

    @app.route('/Kanji/N2')
    def Kanji_N2():
        return render_template('KanjiN2.html',Color=session['BackgroundColor'])#N2 kanji page

    @app.route('/Kanji/N1')
    def Kanji_N1():
        return render_template('KanjiN1.html',Color=session['BackgroundColor'])#N1 kanji page

class Vocab:
    @app.route('/Vocabulary/N5')
    def Vocab_N5():
        return render_template('VocabN5.html',Color=session['BackgroundColor'])#N5 Vocab page

    @app.route('/Vocabulary/N4')
    def Vocab_N4():
        return render_template('VocabN4.html',Color=session['BackgroundColor'])#N4 Vocab page

    @app.route('/Vocabulary/N3')
    def Vocab_N3():
        return render_template('VocabN3.html',Color=session['BackgroundColor'])#N3 Vocab page

    @app.route('/Vocabulary/N2')
    def Vocab_N2():
        return render_template('VocabN2.html',Color=session['BackgroundColor'])#N2 Vocab page

    @app.route('/Vocabulary/N1')
    def Vocab_N1():
        return render_template('VocabN1.html',Color=session['BackgroundColor'])#N1 Vocab page

    @app.errorhandler(400)
    def page_not_found(e):
        return render_template('LandingPage.html',Color=session['BackgroundColor'])#Home Page

class Settings:
    @app.route('/Settings', methods=['POST', 'GET'])#Settings Page Code
    def Settings():
        if 'username' in session:
            if 'Color' in request.form:
                color = request.form['Color']
                session['BackgroundColor'] = color
                doc_ref = db.collection(u'Users').document(session['username']).collection(session['username']).document(session['username'])
                doc_ref.update({u'BackgroundColor': color})
            else:
                return render_template('Settings.html',Color=session['BackgroundColor'],name = session['username'])
        else:
            return redirect('/Account/SignUp')
        return render_template('Settings.html',Color=session['BackgroundColor'],name = session['username'])

class AccountStuff:
    @app.route('/Account/Login', methods=['POST', 'GET'])#Logining in Code
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
                    return render_template('LandingPage.html',Color=session['BackgroundColor'])
        return render_template('Account.html',Page_Name="Login",Page_oposite = "Sign Up Page",Color=session['BackgroundColor'])

    @app.route('/Account/SignUp', methods=['POST', 'GET'])#Sign up Code
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
                session['BackgroundColor'] = Color
        return render_template('Account.html',Page_Name="Sign Up",Page_oposite = "Login page",Color=session['BackgroundColor'])

    @app.route('/Account/Logout')
    def Logout():
        session.clear()
        session['BackgroundColor'] = "#663399"
        return render_template('LandingPage.html',Color=session['BackgroundColor'])#Logout Code

if __name__ == '__main__':
    app.run(debug = True)