'use strict';

/**
 * @ngdoc function
 * @name v2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the v2App
 */
angular.module('v2App')
  .controller('MainCtrl', function ($scope) {
  	$scope.pageClass = 'page-main';
  

    $scope.courses = [
    {'name':'course 1', 'time':'15'},
    {'name':'course 2', 'time':'10'},
    {'name':'course 3', 'time':'25'}
    ];

    $scope.orderProp = 'time';
    
  });
