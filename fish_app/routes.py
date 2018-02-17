from fish_app import app
from flask import request
import gateway as gate
import json
from pprint import pprint

@app.route('/')
@app.route('/home', methods=['GET'])
def home():
	return 'hello world'

@app.route('/fisherman', methods=['GET','POST'])
def fisherman():
	if request.method == 'POST':
		data = request.get_json()
	else:
		data = request.args

	resp = gate.fisherman_crud(data, request.method)
	return json.dumps(resp)

