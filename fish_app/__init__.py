from flask import Flask
from flask_cors import CORS
app = Flask(__name__, static_url_path='/static')
CORS(app)

from fish_app import routes
