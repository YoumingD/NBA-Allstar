from flask import Flask
from flask import render_template
from flask import Response, request, jsonify
app = Flask(__name__)

cur_id = 11

data = {
    "1":{
        "id": 1,
        "name": "Stephen Curry",
        "image": "https://cdn.nba.com/headshots/nba/latest/1040x760/201939.png",
        "summary": "Stephen Curry is the point guard for Golden State Warriors. He is one of"\
        "greatest point guards in the NBA history. He led Warriors to win 3 championships."\
        " He is also the owner of all time 3-points record.",
        "YoB": "1988",
        "height": "1.88",
        "weight": "84",
        "team": "Golden State Warriors",
        "stats": ["20.8", "32.0", "25.7"],
        "all_star_team": "Team LeBron",
        "position": "Guard"
    },
    "2":{
        "id": 2,
        "name": "LeBron James",
        "image": "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
        "summary": "LeBron James currently plays for Los Angeles Lakers. He is one of "\
        "greatest players in the NBA history. He won 4 NBA championships. "\
        "He is also frequently compared to Micheal Jordan by fans.",
        "YoB": "1984",
        "height": "2.06",
        "weight": "113",
        "team": "Los Angeles Lakers",
        "stats": ["25.3", "25.0", "28.9"],
        "all_star_team": "Team LeBron",
        "position": "Forward"
    },
    "3":{
        "id": 3,
        "name": "Kevin Durant",
        "image": "https://cdn.nba.com/headshots/nba/latest/1040x760/201142.png",
        "summary": "Kevin Durant currently plays for Brooklyn Nets. He is one of "\
        "greatest players in the NBA history. He won 2 NBA championships. "\
        "He also won three Olympic gold medals.",
        "YoB": "1988",
        "height": "2.08",
        "weight": "109",
        "team": "Brooklyn Nets",
        "stats": ["26.0", "26.9", "29.3"],
        "all_star_team": "Team Durant",
        "position": "Forward"
    },
    "4":{
        "id": 4,
        "name": "Joel Embiid",
        "image": "https://cdn.nba.com/headshots/nba/latest/1040x760/203954.png",
        "summary": "Joel Embiid plays for Philadelphia 76ers as a Center-Forward. "\
        "He was drafted with the third overall pick in the 2014 NBA draft by the 76ers. "\
        "He attends 5 NBA All Stars. "\
        "He has nicknamed himself the Process.",
        "YoB": "1994",
        "height": "2.13",
        "weight": "127",
        "team": "Philadelphia 76ers",
        "stats": ["23.0", "28.5", "29.7"],
        "all_star_team": "Team Durant",
        "position": "Center Forward"
    },
    "5":{
        "id": 5,
        "name": "Giannis Antetokounmpo",
        "image": "https://cdn.nba.com/headshots/nba/latest/1040x760/203507.png",
        "summary": "Giannis Antetokounmpo plays for Milwaukee Bucks as a Forward. "\
        "In addition to his size, speed and ball-handling skills have earned him the nickname Greek Freak. "\
        "He attends 6 NBA All Stars. "\
        "He won one NBA championships in 2021.",
        "YoB": "1994",
        "height": "2.11",
        "weight": "110",
        "team": "Milwaukee Bucks",
        "stats": ["29.5", "28.1", "29.4"],
        "all_star_team": "Team LeBron",
        "position": "Forward"
    },
    "6":{
        "id": 6,
        "name": "Ja Morant",
        "image": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629630.png",
        "summary": "Ja Morant plays for Memphis Grizzlies as a Guard. "\
        "He was selected by the Grizzlies with the second overall pick in the 2019 NBA draft. "\
        "He was named the NBA Rookie of the Year in 2020. "\
        "He also was named to his first NBA All Star Game in 2022.",
        "YoB": "1999",
        "height": "1.91",
        "weight": "79",
        "team": "Memphis Grizzlies",
        "stats": ["17.8", "19.1", "26.7"],
        "all_star_team": "Team Durant",
        "position": "Guard"
    },
    "7":{
        "id": 7,
        "name": "DeMar DeRozan",
        "image": "https://cdn.nba.com/headshots/nba/latest/1040x760/201942.png",
        "summary": "DeMar DeRozan plays for Chicago Bulls as a Guard-Forward. "\
        "He was selected ninth overall by the Toronto Raptors in the 2009 NBA draft. "\
        "He has played for the United States national team in the 2014 World Cup and the 2016 Summer Olympics. "\
        "He was named 5 times NBA All Star.",
        "YoB": "1989",
        "height": "1.98",
        "weight": "100",
        "team": "Chicago Bulls",
        "stats": ["22.1", "21.6", "28.3"],
        "all_star_team": "Team LeBron",
        "position": "Guard Forward"
    },
    "8":{
        "id": 8,
        "name": "Trae Young",
        "image": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629027.png",
        "summary": "Trae Young plays for Atlanta Hawks as a Guard. "\
        "He was drafted by the Dallas Mavericks in the 2018 NBA draft with the fifth pick. "\
        "Later, he was traded to the Atlanta Hawks. "\
        "He was named 2 times NBA All Star.",
        "YoB": "1998",
        "height": "1.85",
        "weight": "74",
        "team": "Atlanta Hawks",
        "stats": ["29.6", "25.3", "27.6"],
        "all_star_team": "Team Durant",
        "position": "Guard"
    },
    "9":{
        "id": 9,
        "name": "Nikola Jokić",
        "image": "https://cdn.nba.com/headshots/nba/latest/1040x760/203999.png",
        "summary": "Nikola Jokić plays for Denver Nuggets as a Center. "\
        "He was selected by the Nuggets in the second round of the 2014 NBA draft. "\
        "He was voted to the NBA All-Rookie First Team in 2016. "\
        "He was named 4 times NBA All Star.",
        "YoB": "1995",
        "height": "2.11",
        "weight": "129",
        "team": "Denver Nuggets",
        "stats": ["19.9", "26.4", "26.0"],
        "all_star_team": "Team LeBron",
        "position": "Center"
    },
    "10":{
        "id": 10,
        "name": "Jayson Tatum",
        "image": "https://cdn.nba.com/headshots/nba/latest/1040x760/1628369.png",
        "summary": "Jayson Tatum plays for Boston Celtics as a Forward-Guard. "\
        "He was selected with the third overall pick by the Boston Celtics. "\
        "He won a Gold Medal at the 2020 Summer Olympics in Tokyo. "\
        "He was named 3 times NBA All Star.",
        "YoB": "1998",
        "height": "2.03",
        "weight": "95",
        "team": "Boston Celtics",
        "stats": ["23.4", "26.4", "25.8"],
        "all_star_team": "Team Durant",
        "position": "Forward Guard"
    },
}

# ROUTES

@app.route('/')
def home():
   global data
   return render_template('home.html', data=data)

@app.route('/search/<name>')
def search(name=None):
    global data
    searchName = {
        "name": name,
    }

    ans = []
    ans2 = []
    ans3 = []

    name = searchName["name"]

    for key in data:
        if name.casefold() in data[key]["name"].casefold():
            n = name.casefold()
            s = data[key]["name"].casefold()
            ss = data[key]["name"]
            str1 = ss[0:s.index(n)]
            str2 = ss[s.index(n):s.index(n)+len(n)]
            str3 = ss[s.index(n)+len(n):len(s)]
            entry = {
                "id": key,
                "str1": str1,
                "str2": str2,
                "str3": str3,
            }
            ans.append(entry)


    for key in data:
        if name.casefold() in data[key]["all_star_team"].casefold():
            n = name.casefold()
            s = data[key]["all_star_team"].casefold()
            ss = data[key]["all_star_team"]
            str1 = ss[0:s.index(n)]
            str2 = ss[s.index(n):s.index(n)+len(n)]
            str3 = ss[s.index(n)+len(n):len(s)]
            entry = {
                "id": key,
                "str1": str1,
                "str2": str2,
                "str3": str3,
            }
            ans2.append(entry)


    for key in data:
        if name.casefold() in data[key]["position"].casefold():
            n = name.casefold()
            s = data[key]["position"].casefold()
            ss = data[key]["position"]
            str1 = ss[0:s.index(n)]
            str2 = ss[s.index(n):s.index(n)+len(n)]
            str3 = ss[s.index(n)+len(n):len(s)]
            entry = {
                "id": key,
                "str1": str1,
                "str2": str2,
                "str3": str3,
            }
            ans3.append(entry)


    return render_template('search.html', data=data, searchName=searchName, ans=ans, ans2=ans2, ans3=ans3)


@app.route('/view/<id>')
def view(id=None):
    global data
    d = data[id]
    return render_template('view.html', d=d)


@app.route('/add')
def add():
    return render_template('add.html')


@app.route('/edit/<id>')
def edit(id=None):
    global data
    d = data[id]
    return render_template('edit.html', d=d)


@app.route('/<id>/save_data', methods=['GET', 'POST'])
def save_data(id=None):
    global data

    json_data = request.get_json()

    id = json_data["id"]
    s1 = json_data["name"]
    s2 = json_data["image"]
    s3 = json_data["summary"]
    s4 = json_data["YoB"]
    s5 = json_data["height"]
    s6 = json_data["weight"]
    s7 = json_data["team"]
    s8_1 = json_data["stats1"]
    s8_2 = json_data["stats2"]
    s8_3 = json_data["stats3"]
    s9 = json_data["all_star_team"]
    s10 = json_data["position"]

    new_stats = [s8_1, s8_2, s8_3]

    for key in data:
        if data[key]["id"] == int(id):
            new_d = data[key]

    new_d["name"] = s1
    new_d["image"] = s2
    new_d["summary"] = s3
    new_d["YoB"] = s4
    new_d["height"] = s5
    new_d["weight"] = s6
    new_d["team"] = s7
    new_d["stats"] = new_stats
    new_d["all_star_team"] = s9
    new_d["position"] = s10

    return jsonify(new_d=new_d)



@app.route('/add_data', methods=['GET', 'POST'])
def add_data():
    global data
    global cur_id

    json_data = request.get_json()

    id = cur_id
    s1 = json_data["name"]
    s2 = json_data["image"]
    s3 = json_data["summary"]
    s4 = json_data["YoB"]
    s5 = json_data["height"]
    s6 = json_data["weight"]
    s7 = json_data["team"]
    s8_1 = json_data["stats1"]
    s8_2 = json_data["stats2"]
    s8_3 = json_data["stats3"]
    s9 = json_data["all_star_team"]
    s10 = json_data["position"]

    new_stats = [s8_1, s8_2, s8_3]

    new_d = {
        "id": id,
        "name": s1,
        "image": s2,
        "summary": s3,
        "YoB": s4,
        "height": s5,
        "weight": s6,
        "team": s7,
        "stats": new_stats,
        "all_star_team": s9,
        "position": s10
    }

    cur_id = cur_id+1

    data[str(id)] = new_d

    return jsonify(id=id)


if __name__ == '__main__':
   app.run(debug = True)




