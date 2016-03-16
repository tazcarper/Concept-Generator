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
    'circle',
    'phaseFilter',
    'getGamesService'
  ])
 
  .controller('global', ['$scope', '$http', '$rootScope', '$location', function($scope, $http, $rootScope, $location) {
   $scope.pageClass = '';
    //var getLocalGames = localStorage.getItem('selectedGames');
     
    // console.log(localStorage.localSelectedGames)
     var getGames = JSON.parse(localStorage.getItem('localSelectedGames'));
     $scope.selectedGames = getGames;
     console.log(getGames);
    console.log('local storage');
    console.log($scope.selectedGames);
    $scope.currentPhase = '';
    $scope.phases = ['planning', 'exploring', 'analyzing', 'brainstorming'];

    
   

    $scope.fillIn = function(curCircle, percent) {
      var transform_styles = ['-webkit-transform', '-ms-transform', 'transform'];
      console.log($scope.curPhase);
      var target = '.'+curCircle;
      var bar_percent = percent + '%';
      $('footer .progress-bar').css({'width':bar_percent});
      console.log('go fill')
      console.log(target);
      var rotation = 180;
      var fill_rotation = rotation;
      var fix_rotation = rotation * 2;
      $('footer h4').css({'color':'white'});
      for (var i in transform_styles) {
        $(target).addClass('done');
        $(target).find('.circle .fill, .circle .mask.full').css(transform_styles[i], 'rotate(' + fill_rotation + 'deg)');
        $(target).find('.circle .fill.fix').css(transform_styles[i], 'rotate(' + fix_rotation + 'deg)');
        
      }
      // for (var i = phase; i > $scope.phases.length; i-- ) {
      //   var phaseId = $scope.phases[i];
      //   var bar = '.'+phaseId+'_bar';
      //   console.log(bar);
      //   $(bar).css({'width':'100%'});
      // }
      var newColor = $(target).find('.circle .mask .fill').css('background-color');
      $(target).prev('h4').css({'color':newColor});
      
      console.log(newColor)
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
      $('footer .progress-bar').css({'width':'0%'});
      $('footer h4').css({'color':'white'});
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
      .when('/explorer', {
        templateUrl: 'views/explorer.html',
        controller: 'ExplorerCtrl'
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
                console.log('no data');
                def.resolve(error);
              }
            );
            //console.log(def.promise);
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