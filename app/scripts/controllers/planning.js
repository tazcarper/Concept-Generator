'use strict';

angular.module('volcanic-app')
  .controller('PlanningCtrl', ['$scope','$http', 'Games', '$location',function ($scope, $http, Games,$location) {
  	 //console.log($scope.slide);
   
    $scope.nextSlide = function(num){

    }

    $scope.pageClass = $scope.sections[$scope.slide];

    
    $scope.games = [];

   
    	$scope.games = Games.query();
    //	console.log($scope.games);
    	//console.log(data);

    //  $scope.goToUrl = function (gameName){
    //   console.log('go here');
    //   console.log(gameName);
    //   console.log($scope.games)
    //   for (var i=0; i < $scope.games.length; i++){
    //     console.log($scope.games.game)
    //     if ($scope.games[i].game == gameName){
    //       console.log('true');
    //       $location.path('#/game/');
    //     }
    //   }
    // }

  }]);
