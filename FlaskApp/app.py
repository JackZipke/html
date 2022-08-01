from flask import Flask, render_template, jsonify
from readDataToSeries import *
import pandas as pd

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('start.html')

@app.route('/jura/')
def jura():
    return render_template('jura.html')

@app.route('/programmieren/')
def programmieren():
    return render_template('programmieren.html')

@app.route('/programmieren/ladestationen')
def ladestationen():
    time = readDataToSeries()[0]
    batSOC = readDataToSeries()[1]
    series = readDataToSeries()[2]
    return render_template('ladestationen.html', time=time, batSOC=batSOC, series=series)

