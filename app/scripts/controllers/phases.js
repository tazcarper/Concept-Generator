'use strict';

angular.module('volcanic-app')
	.controller('PhasesCtrl', ['$scope', '$http', 'Games', '$location', 'phase', function($scope, $http, Games, $location, phase) {
		//console.log($scope.slide);
		var path = $location.path().toString().substring(8);
		//console.log(path)
		$scope.phase = phase;
		$scope.curPhase = {};
		$scope.games = [];
		$scope.curGames = [];
		$scope.phaseIndex = 0;
		//console.log($scope.phase.length);

		// Get current Phase
		for (var i = 0; i < $scope.phase.length; i++) {
			var phase = $scope.phase[i].phase;

			//console.log(phase);
			if (phase === path) {
				//	console.log($scope.phase[i]);
				$scope.curPhase = $scope.phase[i];
				$scope.phaseIndex = i;
			}
		}
		$scope.pageClass = $scope.curPhase.phase;

		if ($scope.curPhase.phase == 'planning'){
		$scope.resetFill();
		$scope.fillIn($scope.curPhase.phase);
		}
		if ($scope.curPhase.phase == 'exploring'){
		$scope.resetFill();
		$scope.fillIn($scope.curPhase.phase);
		}
		if ($scope.curPhase.phase == 'analyzing'){
		$scope.resetFill();
		$scope.fillIn($scope.curPhase.phase);
		}
		if ($scope.curPhase.phase == 'brainstorming'){
		$scope.resetFill();
		$scope.fillIn($scope.curPhase.phase);
		}

		// Figure out current phase games
		Games.query().$promise.then(function(data) {
			//console.log(data)
			$scope.games = data;
			//console.log($scope.games.length);
			for (var i = 0; i < $scope.games.length; i++) {
				//console.log(i);
				var game = $scope.games[i].phase;
				if (game === path) {
					if ($.inArray($scope.games[i].game, $scope.selectedGames) !==-1 ){
						$scope.curGames.push({'info':$scope.games[i],'selected':true});
					}
					else {
						$scope.curGames.push({'info':$scope.games[i],'selected':false});
					}
					//$scope.curGames.push($scope.games[i]);
					//console.log($scope.curGames)
					// if ($.inArray($scope.games[i].game, $scope.selectedGames) !==-1 ){
					// 	$($scope.games[i].game).addClass('thisfff');
					// }
				}

			}
		}).then(function(data) {
			console.log($scope.curGames);
			
		});




	}]);