"use strict";angular.module("volcanic-app",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","navigation","circle","phaseFilter","getGamesService"]).controller("global",["$scope","$http","$rootScope","$location",function(a,b,c){a.pageClass="";var d=JSON.parse(localStorage.getItem("localSelectedGames"));a.selectedGames=d,console.log(d),console.log("local storage"),console.log(a.selectedGames),a.currentPhase="",a.phases=["planning","exploring","analyzing","brainstorming"],a.fillIn=function(b,c){var d=["-webkit-transform","-ms-transform","transform"];console.log(a.curPhase);var e="."+b,f=c+"%";$("footer .progress-bar").css({width:f}),console.log("go fill"),console.log(e);var g=180,h=g,i=2*g;$("footer h4").css({color:"white"});for(var j in d)$(e).addClass("done"),$(e).find(".circle .fill, .circle .mask.full").css(d[j],"rotate("+h+"deg)"),$(e).find(".circle .fill.fix").css(d[j],"rotate("+i+"deg)");var k=$(e).find(".circle .mask .fill").css("background-color");$(e).prev("h4").css({color:k}),console.log(k)},a.resetFill=function(){var a=["-webkit-transform","-ms-transform","transform"],b=0,c=b,d=2*b;for(var e in a)$(".radial-progress").find(".circle .fill, .circle .mask.full").css(a[e],"rotate("+c+"deg)"),$(".radial-progress").find(".circle .fill.fix").css(a[e],"rotate("+d+"deg)");$("footer .progress-bar").css({width:"0%"}),$("footer h4").css({color:"white"})},c.$on("$routeChangeError",function(){console.log("failed to change routes")})}]).config(["$routeProvider","$locationProvider",function(a,b){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/section1",{templateUrl:"views/planning.html",controller:"PlanningCtrl"}).when("/phases/:phase",{templateUrl:"views/phases.html",controller:"PhasesCtrl",resolve:{phase:["Phases","$location","$q",function(a,b,c){{var d=c.defer();b.path().toString().substring(8),a.query().$promise.then(function(a){d.resolve(a)},function(a){d.resolve(a)})}return d.promise}]}}).when("/explorer",{templateUrl:"views/explorer.html",controller:"ExplorerCtrl"}).when("/section3",{templateUrl:"views/section3.html",controller:"PlanningCtrl"}).when("/section4",{templateUrl:"views/section4.html",controller:"PlanningCtrl"}).when("/section5",{templateUrl:"views/section5.html",controller:"PlanningCtrl"}).when("/game/:Game",{templateUrl:"views/game-detail.html",controller:"GameDetailCtrl",resolve:{myData:["Games","$location","$q","$rootScope",function(a,b,c){var d=c.defer(),e=b.path().toString().substring(6);return a.get({gameName:e},function(){}).$promise.then(function(a){d.resolve(a)},function(a){d.resolve(a)}),console.log(d.promise),d.promise}]}}).when("/pageNotFound",{templateUrl:"views/error.html"}).otherwise({redirectTo:"/"}),b.html5Mode(!1)}]),function(){if(navigator.userAgent.match(/IEMobile\/10\.0/)){var a=document.createElement("style");a.appendChild(document.createTextNode("@-ms-viewport{width:auto!important}")),document.querySelector("head").appendChild(a)}}(),angular.module("volcanic-app").controller("MainCtrl",["$scope",function(a){var b=a.pageClass;console.log(b),a.resetFill(),$("footer").css({bottom:"-174px"})}]),angular.module("volcanic-app").controller("PlanningCtrl",["$scope","$http","Games","$location",function(a,b,c){a.nextSlide=function(){},a.pageClass=a.sections[a.slide],a.games=[],a.games=c.query()}]),angular.module("volcanic-app").controller("PhasesCtrl",["$scope","$http","Games","$location","phase",function(a,b,c,d,e){var f=d.path().toString().substring(8);a.phase=e,a.curPhase={},a.games=[],a.curGames=[],a.phaseIndex=0,$("footer").css({bottom:"0px"});for(var g=0;g<a.phase.length;g++){var e=a.phase[g].phase;e===f&&(a.curPhase=a.phase[g],a.phaseIndex=g)}a.pageClass=a.curPhase.phase,"planning"==a.curPhase.phase&&(a.resetFill(),a.fillIn("purple",0)),"exploring"==a.curPhase.phase&&(a.resetFill(),a.fillIn("red",25)),"analyzing"==a.curPhase.phase&&(a.resetFill(),a.fillIn("yellow",50)),"brainstorming"==a.curPhase.phase&&(a.resetFill(),a.fillIn("blue",75)),c.query().$promise.then(function(b){a.games=b;for(var c=0;c<a.games.length;c++){var d=a.games[c].phase;d===f&&a.curGames.push(-1!==$.inArray(a.games[c].game,a.selectedGames)?{info:a.games[c],selected:!0}:{info:a.games[c],selected:!1})}}).then(function(){console.log(a.curGames)})}]),angular.module("volcanic-app").controller("ExplorerCtrl",["$scope","$http","Games","$location",function(a,b,c){a.games=[],a.pageClass="explorer",c.query().$promise.then(function(b){a.games=b}).then(function(){console.log(a.games)})}]),angular.module("volcanic-app").controller("GameDetailCtrl",["$scope","$routeParams","Games","$location","myData",function(a,b,c,d,e){a.pageClass="page-game-detail",a.gameName=b.gameGame,a.found=!0,a.game=e,a.isSelected=!1,404===a.game.status&&(console.log("page not found"),a.found=!1),-1!==$.inArray(e.game,a.selectedGames)?(a.isSelected=!0,$(".selectGame").text("REMOVE").addClass("selected")):console.log("not in array"),$(".selectGame").click(function(){if(a.isSelected)$(this).text("SELECT").removeClass("selected"),a.selectedGames.splice($.inArray(b,a.selectedGames),1),localStorage.setItem("localSelectedGames",JSON.stringify(a.selectedGames)),console.log("selected games:"),console.log(a.selectedGames),a.isSelected=!1;else{var b=$(this).data("gameid");a.selectedGames.push(b),localStorage.setItem("localSelectedGames",JSON.stringify(a.selectedGames)),console.log("selected games:"),console.log(a.selectedGames),a.isSelected=!0,$(this).text("REMOVE").addClass("selected")}}),a.back=function(){window.history.back()},a.orderProp="time"}]),function(){var a=angular.module("navigation",[]);a.directive("navigation",function(){return{restrict:"E",templateUrl:"includes/navigation.html"}})}(),function(){var a=angular.module("circle",[]);a.directive("circle",function(){return{restrict:"E",templateUrl:"includes/circle.html"}})}(),function(){angular.module("phaseFilter",[]).filter("rightPhase",["$location",function(a){return function(b){for(var c=a.path().toString().substring(8),d=[],e=0;e<b.length;e++)b[e].phase===c&&d.push(b[e]);return d}}])}();var app=angular.module("getGamesService",["ngResource"]);app.factory("Games",["$resource",function(a){return a("/scripts/:gameName.json",{},{query:{method:"GET",params:{gameName:"data"},isArray:!0}})}]),app.factory("Phases",["$resource",function(a){return a("/scripts/:phase.json",{},{query:{method:"GET",params:{phase:"phases"},isArray:!0}})}]);