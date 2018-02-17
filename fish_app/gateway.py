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