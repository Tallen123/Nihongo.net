from typing import Coroutine
from flask import Flask, render_template, request, abort
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
app = Flask(__name__)

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
    textcolor = request.form['textcolor']
    PannelColor = request.form['PannelColor']
    Color =  request.form['Color']
    Hovercolor = request.form['Hovercolor']
    doc_ref = db.collection(u'Users').document(u'Username').collection(u'Username').document(u'Username')
    doc_ref.set({
    u'Text-Color': textcolor,
    u'Pannel-Color': PannelColor,
    u'Background-Color': Color,
    u'Hover-Color': Hovercolor,
})
    return render_template('Settings.html')

@app.route('/Account/Login')
def AccountLogin():
    return render_template('AccountLogin.html')

if __name__ == '__main__':
    app.run(debug = True)