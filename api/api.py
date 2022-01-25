from flask import Flask

app = Flask(__name__)

@app.route('/message', methods=['POST'])
def message(): 
    return '<h1>My portfolio website</h1>'
