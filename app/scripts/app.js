'use strict';

angular
  .module('volcanic-app', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'navigation',
    'phaseFilter',
    'getGamesService'
  ])
  .controller('mainCtrl', ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope) {
    $scope.selected = [];
    

  }])
  .controller('global', ['$scope', '$http', '$rootScope','$location',function($scope, $http, $rootScope,$location) {
    $scope.slide = 1;
    // console.log('slide init');
    // console.log($scope.slide);
    $scope.sections = ['section1', 'section2', 'section3', 'section4', 'section5'];
    
    $rootScope.$on("$routeChangeError",
      function(event, current, previous, rejection) {
        console.log("failed to change routes");
        //$location.path('/pageNotFound');
      });
  }])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/section1', {
        templateUrl: 'views/planning.html',
        controller: 'PlanningCtrl'
      })
      .when('/section2', {
        templateUrl: 'views/section2.html',
        controller: 'PlanningCtrl'
      })
      .when('/section3', {
        templateUrl: 'views/section3.html',
        controller: 'PlanningCtrl'
      })
      .when('/section4', {
        templateUrl: 'views/section4.html',
        controller: 'PlanningCtrl'
      })
      .when('/section5', {
        templateUrl: 'views/section5.html',
        controller: 'PlanningCtrl'
      })
      .when('/game/:Game', {
        templateUrl: 'views/game-detail.html',
        controller: 'GameDetailCtrl',
        resolve: {
          myData: ["Games", "$location", "$q", "$timeout",'$rootScope', function(Games, $location, $q, $timeout,$rootScope) {
            var def = $q.defer();

            var path = $location.path().toString().substring(6);
                        
              // Games service
             Games.get({gameName: path}, function(game, s) {

              }).$promise.then(
                function(data) {
                  // found game data 
                  def.resolve(data);
                },
                function(error) {
                  // couldn't find JSON file
                  def.resolve(error);
                }
              );
           
            return def.promise;
          }]
        }
      })
      .when('/pageNotFound', {
        templateUrl: 'views/error.html'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(false);

  }]);