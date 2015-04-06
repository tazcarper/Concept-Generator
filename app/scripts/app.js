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
  


  }])
  .controller('global', ['$scope', '$http', '$rootScope', '$location', function($scope, $http, $rootScope, $location) {
    $scope.slide = 1;
    //var getLocalGames = localStorage.getItem('selectedGames');
     
    // console.log(localStorage.localSelectedGames)
     var getGames = JSON.parse(localStorage.getItem('localSelectedGames'));
     $scope.selectedGames = getGames;
     console.log(getGames);
    console.log('local storage');
    console.log($scope.selectedGames);
    $scope.currentPhase = '';
    $scope.sections = ['section1', 'section2', 'section3', 'section4', 'section5'];


   

    $scope.fillIn = function(curCircle) {
      var transform_styles = ['-webkit-transform', '-ms-transform', 'transform'];
      console.log($scope.curPhase);
      var target = '.'+curCircle+'_circle';
      console.log('go fill')
      console.log(target);
      var rotation = 180;
      var fill_rotation = rotation;
      var fix_rotation = rotation * 2;
      for (var i in transform_styles) {
        $(target).addClass('done');
        $(target).find('.circle .fill, .circle .mask.full').css(transform_styles[i], 'rotate(' + fill_rotation + 'deg)');
        $(target).find('.circle .fill.fix').css(transform_styles[i], 'rotate(' + fix_rotation + 'deg)');
      }
    }

    $scope.resetFill = function(){
      var transform_styles = ['-webkit-transform', '-ms-transform', 'transform'];
      var rotation = 0;
      var fill_rotation = rotation;
      var fix_rotation = rotation * 2;
      for (var i in transform_styles) {
        $('.radial-progress').find('.circle .fill, .circle .mask.full').css(transform_styles[i], 'rotate(' + fill_rotation + 'deg)');
        $('.radial-progress').find('.circle .fill.fix').css(transform_styles[i], 'rotate(' + fix_rotation + 'deg)');
      }
    }

    // $('.radial-progress').click(function() {
    //   var curCircle = $(this);
    //   $scope.fillIn(curCircle);
    // });

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
      .when('/phases/:phase', {
        templateUrl: 'views/phases.html',
        controller: 'PhasesCtrl',
        resolve: {
          phase: ['Phases', '$location', '$q', function(Phases, $location, $q) {
            var def = $q.defer();
            var path = $location.path().toString().substring(8);
            var list = Phases.query().$promise.then(function(data) {
              def.resolve(data)

            }, function(error) {
              def.resolve(error)
            });

            // console.log(path)
            // console.log(def.promise);
            return def.promise;
          }]
        }
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
          myData: ["Games", "$location", "$q", '$rootScope', function(Games, $location, $q, $rootScope) {
            var def = $q.defer();

            var path = $location.path().toString().substring(6);

            // Games service
            Games.get({
              gameName: path
            }, function(game, s) {

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
            console.log(def.promise);
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

(function() {
  'use strict';
  if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement('style')
    msViewportStyle.appendChild(
      document.createTextNode(
        '@-ms-viewport{width:auto!important}'
      )
    )
    document.querySelector('head').appendChild(msViewportStyle)
  }
})();