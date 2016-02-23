app.controller('RosterController', function ($scope, DataService) {
    $scope.players = [];
    $scope.roster = [];
    $scope.loadPlayers = function () {

        DataService.loadPlayers();
        //console.log($scope.players)
    };
    $scope.setPlayers = function () {
        $scope.players = DataService.getAllPlayers();
        //console.log($scope.players);
    };
    $scope.newPlayer = function () {
        for (var i = 0; i <= $scope.players.length; i++) {
            
            if ($scope.players[i].fullname == $scope.playerName) {
                var player = {
                    name: $scope.players[i].fullname,
                    position: $scope.players[i].position,
                    number: $scope.players[i].pro_team
                }
            }
            if(i == $scope.players.length){
                console.log('done');
            }

        }
        $scope.roster.push(player);
        $scope.playerName = '';
        $scope.playerPosition = '';
        $scope.playerNumber = '';
        console.log($scope.players);
    };

    $scope.deletePlayer = function (i) {
        $scope.players.splice(i, 1)
    }




})