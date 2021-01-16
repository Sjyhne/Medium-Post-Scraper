from flask import Flask
import time
from daily_medium_update import get_all_articles

app = Flask(__name__)

@app.route("/time")
def get_current_time():
    return {"time": time.time()}

@app.route("/posts")
def get_posts():
    return get_all_articles()