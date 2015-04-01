'use strict';

angular.module('volcanic-app')
  .controller('GameDetailCtrl', ['$scope', '$routeParams', 'Games', '$location','myData', function ($scope, $routeParams, Games, $location, myData) {
  	$scope.pageClass = 'page-game-detail';
  	$scope.gameName = $routeParams.gameGame;
    $scope.found = true;
    console.log(myData)
  	$scope.game = myData;

    if ($scope.game.status === 404){
       console.log('page not found');
       $scope.found = false; 
    }
    else {

    }
 

  	// back to previous page
  	$scope.back = function(){
  		window.history.back();
  	};

  

   
    $scope.orderProp = 'time';
    
  }]);
