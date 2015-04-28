'use strict';

angular.module('volcanic-app')
  .controller('MainCtrl', ['$scope',function ($scope) {
  	
  	var t = $scope.pageClass;
  	console.log(t);

    $scope.resetFill();
    
    $('footer').css({'bottom':'-174px'});

  }]);
