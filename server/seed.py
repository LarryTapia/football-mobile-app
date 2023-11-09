#!/usr/bin/env python3

# Local imports
from app import app
from models import db, Team, Fixture
import operator as op

#Scrapper imports
import requests
from bs4 import BeautifulSoup

###
### Scrapper for all teams
###

###
### Scrapper for all fixtures, home team and away team
###
fixtures_URL = "https://www.theguardian.com/football/championsleague/fixtures"
fixtures_page = requests.get(fixtures_URL)
soup1 = BeautifulSoup(fixtures_page.content, "html.parser")
home_teams = soup1.find_all("div", class_ = "football-match__team football-match__team--home football-team")
away_teams = soup1.find_all("div", class_ = "football-match__team football-match__team--away football-team")
times = soup1.find_all("td", class_ = "football-match__status football-match__status--f table-column--sub")



if __name__ == '__main__':
    with app.app_context():
        print ('Clearing database ...')
        
        Team.query.delete()
        Fixture.query.delete()
        
        print("Starting seed...")
        print("Creating Champions League Teams...")
        
        all_teams = []
        
        for home in home_teams:
            all_teams.append(home.text.strip())
            
        all_teams = list(set(all_teams))

        all_teams_DB = []
        
        for team in all_teams:
            team_DB = Team(team_name = team)  
            all_teams_DB.append(team_DB)

            db.session.add_all(all_teams_DB)
            db.session.commit()
            
        print("Creating Champions League Fixtures...")
                 
        fixtures_list = []
        
        for home_team,away_team,time in zip(home_teams, away_teams, times):
            
            home = Team.query.filter(home_team.text.strip() == Team.team_name).first()
            away = Team.query.filter(away_team.text.strip() == Team.team_name).first()
        
            fixture = Fixture(home_id = home.id, away_id = away.id, date = "test", time = time.text.strip())
            fixtures_list.append(fixture)
            
            db.session.add_all(fixtures_list)
            db.session.commit()    
            
        print("Seeding complete!")
