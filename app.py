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

@app.route("/History")
def History():
        return render_template("History.html", name="History")
        
@app.route("/Test")
def Test():
        return render_template("TestsPage.html", name="TestingPage")

@app.errorhandler(404)
def page_not_found(e):
    return render_template('error.html' , name = "Error", error={"code":"404","message":"Page Not Found"})

if __name__ == "__main__":
    app.run(debug=True)