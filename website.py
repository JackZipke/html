from flask import Flask, render_template

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
    return render_template('ladestationen.html')

if __name__ == '__main__':
    app.run(debug=True)   # später im fertigen einsatz debug zu "false" setzen