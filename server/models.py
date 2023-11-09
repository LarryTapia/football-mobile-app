from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
# from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy

metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
    "uq": "uq_%(table_name)s_%(column_0_name)s",
    "ck": "ck_%(table_name)s_%(constraint_name)s",
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})

db = SQLAlchemy(metadata=metadata)

# Models go here!
class Team (db.Model, SerializerMixin):
    __tablename__ = "Teams_Table"
    
    id = db.Column(db.Integer, primary_key = True)
    team_name = db.Column(db.String, nullable = False)
    
    home_fixtures = db.relationship('Fixture', back_populates = 'home_team', foreign_keys = "Fixture.home_id")
    away_fixtures = db.relationship('Fixture', back_populates = 'away_team', foreign_keys = "Fixture.away_id")
    
    serialize_rules = ('-home_fixtures','-away_fixtures')
    
class Fixture (db.Model, SerializerMixin):
    __tablename__ = "Fixtures_Table"
    
    id = db.Column(db.Integer, primary_key = True)
    
    home_id = db.Column(db.Integer, db.ForeignKey('Teams_Table.id'))
    away_id = db.Column(db.Integer, db.ForeignKey('Teams_Table.id'))
    date = db.Column(db.String, nullable = False)
    time = db.Column(db.String, nullable = False)
    
    home_team = db.relationship('Team', back_populates = 'home_fixtures', foreign_keys = [home_id])
    away_team = db.relationship('Team', back_populates = 'away_fixtures', foreign_keys = [away_id])
    
    serialize_rules = ('-home_team.home_fixtures',"-away_team.away_fixtures","-home_team.away_fixtures","-away_team.home_fixtures") 
    
    