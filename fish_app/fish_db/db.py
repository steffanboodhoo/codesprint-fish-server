from pymongo import MongoClient
from pprint import pprint
import uuid
#initialization
client = MongoClient()
client = MongoClient('localhost',27017)
db = client['fishdb']

#fisherman 		~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
fisherman = db['fisherman']

def insert_fisherman(data):
	data["_id"] = id_gen()
	fisherman.insert_one(data)
	return data["_id"]

def get_fisherman(data):
	cursor = fisherman.find(data)
	resp = [rec for rec in cursor]
	return resp

#store_item 	~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
store_item = db['store_item']

def insert_store_item(data):
	store_item.insert_one(data)

def get_store_item(data):
	cursor = store_item.find(data)
	resp = [rec for rec in cursor]
	return resp
	
#catch 			~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
catch = db['catch']

def insert_catch(data):
	catch.insert_one(data)

def get_catch(data):
	cursor = catch.find(data)
	resp = [rec for rec in cursor]
	return resp

def id_gen():
	import random
	id = ""
	for i in range(6):
		id+=str(random.randint(1,9))
	return int(id)

if __name__ == '__main__':
	from pprint import pprint
	# post_id = collection.insert_one(post).insert_id
	# c = fisherman.find({"first_name":"Steffan"})
	# for r in c:
	# 	pprint(r)
	# import uuid
	# arr = []
	# for i in range(1000):
	# 	arr.append(uuid.uuid4().int)
	# for i in range(len(arr)):
	#     for j in range(len(arr)):
	#     	if i!=j and arr[i]==arr[j]:
 #        		print'shit found'

	#fisherman.delete_many({})
	