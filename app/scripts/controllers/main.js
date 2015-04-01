'use strict';

angular.module('volcanic-app')
  .controller('MainCtrl', function ($scope) {
  	$scope.pageClass = 'page-main';
  

    $scope.courses = [
    {'name':'course 1', 'time':'15'},
    {'name':'course 2', 'time':'10'},
    {'name':'course 3', 'time':'25'}
    ];

    $scope.orderProp = 'time';
    
  });
