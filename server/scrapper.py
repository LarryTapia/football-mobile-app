import requests
from bs4 import BeautifulSoup


teams_URL = "https://www.90min.com/posts/2023-24-champions-league-confirmed-teams-pots"
teams_page = requests.get(teams_URL)

fixtures_URL = "https://www.theguardian.com/football/championsleague/fixtures"
fixtures_page = requests.get(fixtures_URL)

soup1 = BeautifulSoup(fixtures_page.content, "html.parser")
soup2 = BeautifulSoup(teams_page.content, "html.parser")

teams = soup2.find_all("p", class_ = "tagStyle_z4kqwb-o_O-style_1tcxgp3-o_O-style_1pinbx1-o_O-style_1njobzg")
home_teams = soup1.find_all("div", class_ = "football-match__team football-match__team--home football-team")
away_teams = soup1.find_all("div", class_ = "football-match__team football-match__team--away football-team")
times = soup1.find_all("td", class_ = "football-match__status football-match__status--f table-column--sub")

for team in teams:
    if team.text.strip() != "Team":
        print(type(team.text.strip()))
        print(team.text.strip())

# teams = soup2.find_all("td", class_ = "links no-border-links hauptlink")

# for card in cards:
#     print(card.text.strip())

# for home_team in home_teams:
#     print(home_team.text.strip())


# print("==============================================================================")

# for away_team in away_teams:
#     print(away_team.text.strip())


# for time in times:
#     print(time.text.strip())
    
# print(len(home_teams))    
# print(len(away_teams))
# print(len(times))

for x,y,z in zip(home_teams, away_teams, times):
    print(x.text.strip())
    print(y.text.strip())
    print(z.text.strip())
