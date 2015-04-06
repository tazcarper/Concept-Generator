'use strict';

angular.module('volcanic-app')
  .controller('PlanningCtrl', ['$scope','$http', 'Games', '$location',function ($scope, $http, Games,$location) {
  	 //console.log($scope.slide);
   
    $scope.nextSlide = function(num){

    }

    $scope.pageClass = $scope.sections[$scope.slide];

    
    $scope.games = [];

   
    $scope.games = Games.query();
   

  }]);
