from flask import Flask, render_template, jsonify

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

@app.route('/programmieren/solaranlage')
def ladestationen():
    with open("time.json", "r") as f:
        time = f.read()
    with open("batSOC.json", "r") as f:
        batSOC = f.read()
    with open("series.json", "r") as f:
        series = f.read()
    
    print(time)
    print(batSOC)
    print(series)

    return render_template('solaranlage.html', time=time, batSOC=batSOC, series=series)

if __name__ == '__main__':
    app.run(debug=True)   # spaeter im fertigen einsatz debug zu "false" setzen

