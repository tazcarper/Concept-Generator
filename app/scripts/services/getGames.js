'use strict';

/* Get Games Services */

var app = angular.module('getGamesService', ['ngResource']);

app.factory('Games', ['$resource',
  function($resource){
    return $resource('/scripts/:gameName.json', {}, {
      query: {method:'GET', params:{gameName:'data'},isArray:true}
    });
  }]);

