


app.factory('DataService', function ($http){
    var players = [];
    var service = {
        loadPlayers: function () {
            $http.get("http://bcw-getter.herokuapp.com/?url=http%3A%2F%2Fapi.cbssports.com%2Ffantasy%2Fplayers%2Flist%3Fversion%3D3.0%26SPORT%3Dfootball%26response_format%3Djson").success(function (data) {
                players = data.body.players;
                console.log(players);
                
            });

        },
    
        getAllPlayers: function () {
           return players;
        },
    getPlayersByTeam: function (team) {
            for (var i = 0; i < players.length; i++) {
                if(players[i].team == team) {
                    players.push(players[i]);
                }
                
            }
            return players;
        },
    getPlayersByPosition: function (position) {
           
            for (var i = 0; i < players.length; i++) {
                if(players[i].position == position){
                players.push(players[i]); 
                }      
            }
            return players;
        }
    }

    return service;
});