from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def alexa():
    return render_template('alexa.html')




app.run(debug=True)
