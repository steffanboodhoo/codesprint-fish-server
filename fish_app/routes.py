from fish_app import app
from flask import request
import gateway as gate
import json
from pprint import pprint

@app.route('/')
@app.route('/home', methods=['GET'])
def home():
	return app.send_static_file('main_app/main.html')

@app.route('/fisherman', methods=['GET','POST'])
def fisherman():
	if request.method == 'POST':
		data = request.get_json()
	else:
		data = request.args

	resp = gate.fisherman_crud(data, request.method)
	return json.dumps(resp)

@app.route('/store_item', methods=['GET','POST'])
def store_item():
	if request.method == 'POST':
		data = request.get_json()
	else:
		data = request.args

	resp = gate.store_item_crud(data, request.method)
	return json.dumps(resp)

@app.route('/catch', methods=['GET','POST'])
def catch():
	if request.method == 'POST':
		data = request.get_json()
	else:
		data = request.args

	resp = gate.catch_crud(data, request.method)
	return json.dumps(resp)