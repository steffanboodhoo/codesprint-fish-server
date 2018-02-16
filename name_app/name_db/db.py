from pymongo import MongoClient
import pprint
client = MongoClient()
client = MongoClient('localhost',27017)

db = client['fishdb']

collection = db['fisherman']

# post = {"first_name":"Steffan",
# 		"last_name":"Boodhoo",
# 		"last_updated":131,
# 		"store_lat":10.5653995,
# 		"store_long":-61.2734577,
# 		"id":None}

# post_id = collection.insert_one(post).insert_id
pprint.pprint(collection.find_one({"first_name":"Steffan"}))