from flask import Flask, render_template, jsonify
from readDataToSeries import *

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
    series = readDataToSeries()
    print(series)
    return render_template('ladestationen.html', series=series)

if __name__ == '__main__':
    app.run(debug=True)   # später im fertigen einsatz debug zu "false" setzen