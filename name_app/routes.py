from name_app import app
from flask import request

@app.route('/')
@app.route('/home', methods=['GET'])
def home():
	return 'hello world'

@app.route('/fisherman', methods=['GET','POST'])
def fisherman():
	if request.method == 'GET':
		return 'get'
	elif request.method == 'POST':
		return 'post'

