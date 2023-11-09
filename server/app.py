#!/usr/bin/env python3

from flask import Flask, jsonify, request, session, make_response
from flask_migrate import Migrate
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from models import Team, Fixture

from models import db

app = Flask(__name__)
app.secret_key = b'Y\xf1Xz\x00\xad|eQ\x80t \xca\x1a\x10K'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

CORS(app)

migrate = Migrate(app, db)

db.init_app(app)

bcrypt = Bcrypt(app)


# Views go here!

@app.route('/')
def index():
    return '<h1>Project Server</h1>'

@app.get("/teams")
def get_allteams():
    
    try:
        teams = Team.query.all()
        teams_list = [team.to_dict() for team in teams]
        return make_response(jsonify(teams_list), 200)
    except AttributeError:
        return make_response({'error' : '404 teams not found'}, 404)
    
    
@app.get("/teams/<int:id>")
def get_team_by_id(id:int):
    try:
        team = Team.query.filter(Fixture.id == id).first()
        return make_response(jsonify(team.to_dict()), 200)
    
    except AttributeError:
        return make_response({'error' : '404 team not found'}, 404)
    
@app.get("/fixtures")
def get_allfixtures():
    
    try:
        fixtures = Fixture.query.all()
        fixtures_list = [fixture.to_dict() for fixture in fixtures]
        return make_response(jsonify(fixtures_list), 200)
    except AttributeError:
        return make_response({'error' : '404 fixtures not found'}, 404)
    
@app.get("/fixtures/<int:id>")
def get_fixtures_by_id(id:int):
    
    try:
        fixture = Fixture.query.filter(Fixture.id == id).first()
        return make_response(jsonify(fixture.to_dict()), 200)
    
    except AttributeError:
        return make_response({'error' : '404 fixture not found'}, 404)
    

if __name__ == '__main__':
    app.run(port=5555, debug=True)

