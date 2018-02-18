from pprint import pprint
from fish_db import db as fish_db

def fisherman_crud(data, method):
	if method == 'POST':
		id = fish_db.insert_fisherman(data)
		return {'status':'success','id':id}

	elif method == 'GET':
		resp = fish_db.get_fisherman(data)
		return {'status':'success', 'data':resp}
		
	elif method == 'PUT':
		fish_db.update_fisherman(data)

def store_item_crud(data, method):
	if method == 'POST':
		id = fish_db.insert_store_item(data)
		return {'status':'success'}

	elif method == 'GET':
		resp = fish_db.get_store_item(data)
		return {'status':'success','data':resp}

	elif method == 'PUT':
		fish_db.update_store_item(data)

def catch_crud(data, method):
	if method == 'POST':
		id = fish_db.insert_catch(data)
		return {'status':'success','id':id}

	elif method == 'GET':
		resp = fish_db.get_catch(data)
		return {'status':'success','data':resp}

	# elif method == 'PUT':
	# 	fish_db.catch_item(data)