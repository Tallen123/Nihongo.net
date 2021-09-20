from os import name
import os
from flask import Flask
from flask import render_template
import flask

app = Flask(__name__)

@app.route("/")
def start():
        return render_template("Main.html", name="Nihongo.net")

@app.route("/map")
def map():
    return render_template("map.html", name="Map")

@app.route("/food")
def food():
    return render_template("Food.html", name="Food")
    
@app.route("/About")
def About():
        return render_template("About.html", name="About_Nihongo.net")
        
@app.route("/Test")
def Test():
        return render_template("TestsPage.html", name="TestingPage")

if __name__ == "__main__":
    app.run(debug=True)