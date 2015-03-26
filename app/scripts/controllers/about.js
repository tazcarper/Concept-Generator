'use strict';

/**
 * @ngdoc function
 * @name v2App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the v2App
 */
angular.module('v2App')
  .controller('AboutCtrl', function ($scope) {
  	
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.pageClass = 'page-about';
  });
