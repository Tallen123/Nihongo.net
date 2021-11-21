from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def HomePage():
    return render_template('HomePage.html')

    
@app.route('/beginnerOverview')
def BeginnerOverview():
    return render_template('BeginnerOverview.html')

@app.route('/Beginner1Lesson1')
def Beginner1Lesson1():
    return render_template('/Beginner1/Beginner1Lesson1.html')#Beginner1Lesson1

@app.route('/Hiragana')
def Hiragana():
    return render_template('/Beginner1/Alphabet/Hiragana.html')#Beginner1Lesson1