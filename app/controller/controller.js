app.controller('RosterController', function ($scope, DataService) {
    $scope.players = [];
    $scope.roster = [];
    $scope.loadPlayers = function () {

        DataService.loadPlayers();
        //console.log($scope.players)
    };
    $scope.setPlayers = function () {
        $scope.players = DataService.getAllPlayers();
        console.log($scope.players);
    };
    $scope.newPlayer = function () {
        for (var i = 0; i <= $scope.players.length; i++) {
            
            if ($scope.players[i].fullname == $scope.playerName){
                       $scope.roster.push($scope.players[i]);  
                //  var player = {
                //      name: $scope.players.fullname,
                //    position: $scope.players.position,
                //     number: $scope.players[i].pro_team
                    
                //  }
                
            }
            
            if(i == $scope.players.length){
                console.log('done');
            }

        }
        //$scope.roster.push(player);
        $scope.playerName = '';
        $scope.playerPosition = '';
        $scope.playerNumber = '';
        
    };

    $scope.deletePlayer = function (i) {
        $scope.players.splice(i, 1)
    }




})