(function(){
var app = angular.module('circle', []);

app.directive('circle', function(){
	return {
		restrict:"E",
		templateUrl:"includes/circle.html"
	};
});
})();