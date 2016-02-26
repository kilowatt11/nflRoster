app.controller('RosterController', function ($scope, DataService) {
    $scope.players = [];
    $scope.roster = [];
    $scope.loadPlayers = function () {

        DataService.loadPlayers();
        // $scope.loadmyRoster();
        console.log($scope.players)
    };
    $scope.setPlayers = function () {
        $scope.players = DataService.getAllPlayers();

       // console.log($scope.players);
    };
    $scope.newPlayer = function () {
        for (var i = 0; i < $scope.players.length; i++) {

            if ($scope.players[i].fullname == $scope.nameText) {
                $scope.roster.push($scope.players[i]);  
               
            }

            // if (i == $scope.players.length) {
            //     console.log('done');
            // }

        }
        
        $scope.playerName = '';
        $scope.playerPosition = '';
        $scope.playerNumber = '';

    };

    $scope.deletePlayer = function (i) {
        $scope.roster.splice(i, 1)
    }

    $scope.addPlayer = function (id) {
       for (var i = 0; i < $scope.players.length; i++) {
           if($scope.players[i].id == id)
           $scope.roster.push($scope.players[i]);
       }     
        
       // console.log($scope.roster);
        
        
    }
    $scope.savePlayer = function(){
        localStorage.setItem("myTeam",JSON.stringify($scope.roster))
        
        
    }
    $scope.loadmyRoster = function (){
        $scope.roster = JSON.parse(localStorage.getItem("myTeam"))
    }
   
});