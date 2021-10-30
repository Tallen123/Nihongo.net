from flask import Flask, render_template, request, abort,session
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from werkzeug.utils import redirect

textcolor = " "
PannelColor = " "
Color = " "
Hovercolor = " "

app = Flask(__name__)
app.secret_key = "W7adY5qnOGl0yLHwXG4nlaIUxxQeayvB10jqpgziHFYxywjUip4UEYXGnMk92aMTnvFCU1YB7iMIRXll"
cred = credentials.Certificate("nihongonet-ee832-firebase-adminsdk-nstiq-c19391f2d6.json")#change to  before uploading /home/Tallen/Nihongonet/nihongonet-ee832-firebase-adminsdk-nstiq-c19391f2d6.json
firebase_admin.initialize_app(cred, {
  'projectId': "nihongonet-ee832",
})

db = firestore.client()

@app.before_request
def make_session_permanent():
    session.permanent = True


@app.route('/Community')
def community():
    if 'BackgroundColor' in session:
        return render_template('community.html',Color=session['BackgroundColor'])
    else:
        return render_template('community.html',Color="#663399")

@app.route('/')
def landing_page():
    if 'BackgroundColor' in session:
        return render_template('LandingPage.html',Color=session['BackgroundColor'])
    else:
        return render_template('LandingPage.html',Color="#663399")

@app.route('/Numbers')
def Numbers():
    if 'BackgroundColor' in session:
        return render_template('Numbers.html',Color=session['BackgroundColor'])#Numbers Page
    else:
        return render_template('Numbers.html',Color="#663399")

@app.route('/Grammar')
def Phonetics():
    if 'BackgroundColor' in session:
        return render_template('Grammar.html',Color=session['BackgroundColor'])
    else:
        return render_template('Grammar.html',Color="#663399")

class ErrorHandling:
    @app.errorhandler(400)
    def page_not_found(e):
        if 'BackgroundColor' in session:
            return render_template('LandingPage.html',Color=session['BackgroundColor'])
        else:
            return render_template('LandingPage.html',Color="#663399")

class HiraganaKatakana:
    @app.route('/Hiragana')
    def Hiragana():
        if 'BackgroundColor' in session:
            return render_template('Hiragana.html',Color=session['BackgroundColor'])#Numbers Page
        else:
            return render_template('Hiragana.html',Color="#663399")

    @app.route('/Katakana')
    def Katakana():
        if 'BackgroundColor' in session:
            return render_template('Katakana.html',Color=session['BackgroundColor'])#Numbers Page
        else:
            return render_template('Katakana.html',Color="#663399")

class Kanji:
    @app.route('/Kanji/N5')
    def Kanji_N5():
        if 'BackgroundColor' in session:
            return render_template('KanjiN5.html',Color=session['BackgroundColor'])
        else:
            return render_template('KanjiN5.html',Color="#663399")

    @app.route('/SearchPage/<string:Kanji>')
    def SearchPageK(kanji):
        if 'BackgroundColor' in session:
            return render_template('SearchPage.html',Color=session['BackgroundColor'],Kanji=kanji)
        else:
            return render_template('SearchPage.html',Color="#663399",Kanji=kanji)

    @app.route('/SearchPage')
    def SearchPage():
        if 'BackgroundColor' in session:
            return render_template('SearchPage.html',Color=session['BackgroundColor'])
        else:
            return render_template('SearchPage.html',Color="#663399")

    @app.route('/Kanji/N4')
    def Kanji_N4():
        if 'BackgroundColor' in session:
            return render_template('KanjiN4.html',Color=session['BackgroundColor'])
        else:
            return render_template('KanjiN4.html',Color="#663399")

    @app.route('/Kanji/N3')
    def Kanji_N3():
        if 'BackgroundColor' in session:
            return render_template('KanjiN3.html',Color=session['BackgroundColor'])
        else:
            return render_template('KanjiN3.html',Color="#663399")

    @app.route('/Kanji/N2')
    def Kanji_N2():
        if 'BackgroundColor' in session:
            return render_template('KanjiN2.html',Color=session['BackgroundColor'])
        else:
            return render_template('KanjiN2.html',Color="#663399")

    @app.route('/Kanji/N1')
    def Kanji_N1():
        if 'BackgroundColor' in session:
            return render_template('KanjiN1.html',Color=session['BackgroundColor'])
        else:
            return render_template('KanjiN1.html',Color="#663399")

class Vocab:
    @app.route('/Vocabulary/N5')
    def Vocab_N5():
        if 'BackgroundColor' in session:
            return render_template('VocabN5.html',Color=session['BackgroundColor'])
        else:
            return render_template('VocabN5.html',Color="#663399")

    @app.route('/Vocabulary/N4')
    def Vocab_N4():
        if 'BackgroundColor' in session:
            return render_template('VocabN4.html',Color=session['BackgroundColor'])
        else:
            return render_template('VocabN4.html',Color="#663399")

    @app.route('/Vocabulary/N3')
    def Vocab_N3():
        if 'BackgroundColor' in session:
            return render_template('VocabN3.html',Color=session['BackgroundColor'])
        else:
            return render_template('VocabN3.html',Color="#663399")

    @app.route('/Vocabulary/N2')
    def Vocab_N2():
        if 'BackgroundColor' in session:
            return render_template('VocabN2.html',Color=session['BackgroundColor'])
        else:
            return render_template('VocabN2.html',Color="#663399")

    @app.route('/Vocabulary/N1')
    def Vocab_N1():
        if 'BackgroundColor' in session:
            return render_template('VocabN1.html',Color=session['BackgroundColor'])
        else:
            return render_template('VocabN1.html',Color="#663399")

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
                if 'BackgroundColor' in session:
                    return render_template('Settings.html',Color=session['BackgroundColor'],name = session['username'])
                else:
                    return render_template('Settings.html',Color="#663399",name = session['username'])
        else:
            return redirect('/Account/SignUp')
        if 'BackgroundColor' in session:
            return render_template('Settings.html',Color=session['BackgroundColor'],name = session['username'])
        else:
            return render_template('Settings.html',Color="#663399",name = session['username'])

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
                    session['BackgroundColor'] = doc.to_dict()['BackgroundColor']
                    if 'BackgroundColor' in session:
                        return render_template('Settings.html',Page_Name="Login",Page_oposite = "Sign Up Page",Color=session['BackgroundColor'])
                    else:
                        return render_template('Settings.html',Page_Name="Login",Page_oposite = "Sign Up Page",Color="#663399")
                if 'BackgroundColor' in session:
                    return render_template('Account.html',Page_Name="Login",Page_oposite = "Sign Up Page",Color=session['BackgroundColor'])
        else:
            return render_template('Account.html',Page_Name="Login",Page_oposite = "Sign Up Page",Color="#663399")

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
        if 'BackgroundColor' in session:
            return render_template('Account.html',Page_Name="Sign Up",Page_oposite = "Login page",Color=session['BackgroundColor'])
        else:
            return render_template('Account.html',Page_Name="Sign Up",Page_oposite = "Login page",Color="#663399")

    @app.route('/Account/Logout')
    def Logout():
        session.clear()
        session['BackgroundColor'] = "#663399"
        if 'BackgroundColor' in session:
            return render_template('LandingPage.html',Page_Name="Sign Up",Page_oposite = "Login page",Color=session['BackgroundColor'])
        else:
            return render_template('LandingPage.html',Page_Name="Sign Up",Page_oposite = "Login page",Color="#663399")

if __name__ == '__main__':
    app.run(debug = True)