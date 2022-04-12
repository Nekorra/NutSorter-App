import firebase_admin
from firebase_admin import db

cred_obj = firebase_admin.credentials.Certificate('trash-114b6-firebase-adminsdk-8badn-5a9c78ed5c.json')
default_app = firebase_admin.initialize_app(cred_obj, {
	'databaseURL': "https://trash-114b6-default-rtdb.firebaseio.com/"
	})

while True:
    status = db.reference("/data/status").get()
    speed = db.reference("/data/speed").get()
    print(status, speed)