app.controller('RosterController', function($scope){
    $scope.players = [];
    
    $scope.newPlayer = function(){
        
        var player = {
            name: $scope.playerName,
            position: $scope.playerPosition,
            number: $scope.playerNumber,
        }
        $scope.players.push(player);
        $scope.playerName='';
        $scope.playerPosition='';
        $scope.playerNumber='';
        console.log($scope.players);
    }
    $scope.deletePlayer = function (i){
        $scope.players.splice(i,1)
    }
   
    

    
})