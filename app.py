from flask import Flask, render_template, request
from better_profanity import profanity 
import json

app = Flask(__name__)


def load_custom_swears_from_json(json_file):
    with open(json_file, 'r', encoding='utf-8') as file:
        data = json.load(file)
        custom_swears = data
    return custom_swears

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/censor', methods=['POST'])
def censor_text():
    profanity.load_censor_words()
    json_file = 'cuss-words.json'
    custom_swears = load_custom_swears_from_json(json_file)
    profanity.add_censor_words(custom_swears)
    text = request.form['text']
    censored_text = profanity.censor(text, "@")
    return censored_text

if __name__ == '__main__':
    app.run(debug=True)
