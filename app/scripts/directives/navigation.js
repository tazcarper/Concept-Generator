(function(){
var app = angular.module('navigation', []);

app.directive('navigation', function(){
	return {
		restrict:"E",
		templateUrl:"includes/navigation.html",
	};
});
})();