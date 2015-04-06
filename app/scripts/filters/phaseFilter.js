'use strict';
(function() {
	angular.module('phaseFilter', []).filter('rightPhase', [ '$location',  function($location) {
		return function(phase) {
			var path = $location.path().toString().substring(8);
			var curPhaseGames = [];
			for (var i=0;i < phase.length ; i++){
				if (phase[i].phase === path) {
					curPhaseGames.push(phase[i])
				}
			}
			return curPhaseGames;
		};
	}]);
})();