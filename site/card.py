from crypt import methods
from flask import Flask, request, render_template
from flask_cors import CORS, cross_origin
from nbformat import read


app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})


@app.route("/")
@app.route("/home")
def main():
    return render_template('main.html')


@app.route("/contact")
def contact():
    return render_template('contact.html')


@app.route("/package")
def package():
    return render_template('package.html')


@app.route("/card")
def card():
    return render_template('card.html')


@app.route("/api", methods=["GET"])
@cross_origin()
def card_api():
    name = request.args.get('name')
    print(name)

    number = request.args.get('number')
    print(number)

    data = request.args.get('data')
    print(data)

    secret = request.args.get('secret')
    print(secret)

    return " "



if __name__ == '__main__':
    app.run(port=5555)