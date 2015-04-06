'use strict';

angular.module('volcanic-app')
  .controller('GameDetailCtrl', ['$scope', '$routeParams', 'Games', '$location', 'myData', function($scope, $routeParams, Games, $location, myData) {
    $scope.pageClass = 'page-game-detail';
    $scope.gameName = $routeParams.gameGame;
    $scope.found = true;
    console.log(myData);
    $scope.game = myData;
    $scope.isSelected = false;

    if ($scope.game.status === 404) {
      console.log('page not found');
      $scope.found = false;
    } else {

    }

    if ($.inArray(myData.game,$scope.selectedGames) !==-1){
     $scope.isSelected = true;
     $('.selectGame').text('REMOVE').addClass('selected');
    }
    else {
      console.log('not in array')
    }


    $('.selectGame').click(function() {
      if (!$scope.isSelected) {
        // add to selectd games
        var gameIndex = $(this).data('gameid');
        //console.log(gameIndex);
        $scope.selectedGames.push(gameIndex);
        localStorage.setItem('localSelectedGames', JSON.stringify($scope.selectedGames));
        console.log('selected games:');
        console.log($scope.selectedGames);
        $scope.isSelected = true;
        $(this).text('REMOVE').addClass('selected');
      } else {
        // remove game from selected games
        $(this).text('SELECT').removeClass('selected');
        $scope.selectedGames.splice($.inArray(gameIndex, $scope.selectedGames), 1);
        localStorage.setItem('localSelectedGames', JSON.stringify($scope.selectedGames));
        console.log('selected games:');
        console.log($scope.selectedGames);
        $scope.isSelected = false;
      }

    })

    // back to previous page
    $scope.back = function() {
      window.history.back();
    };



    $scope.orderProp = 'time';

  }]);