'use strict';
(function() {
	angular.module('phaseFilter', []).filter('phase', function() {
		return function(phase) {
			console.log(phase);
		};
	});
})();