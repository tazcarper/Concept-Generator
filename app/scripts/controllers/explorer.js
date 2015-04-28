'use strict';

angular.module('volcanic-app')
	.controller('ExplorerCtrl', ['$scope', '$http', 'Games', '$location',  function($scope, $http, Games, $location) {
		$scope.games = [];
		$scope.pageClass = 'explorer';
		Games.query().$promise.then(function(data) {
			//console.log(data)
			$scope.games = data;
			//console.log($scope.games.length);
			
		}).then(function(data) {
			console.log($scope.games);

		});
		
	}]);