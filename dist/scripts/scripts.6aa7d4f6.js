"use strict";angular.module("v2App",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("v2App").controller("MainCtrl",["$scope",function(a){a.pageClass="page-main",a.courses=[{name:"course 1",time:"15"},{name:"course 2",time:"10"},{name:"course 3",time:"25"}],a.orderProp="time"}]),angular.module("v2App").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.pageClass="page-about"}]);