'use strict';

var WEBApp = angular.module('WEBApp', ['ui.router', 'taskControllers', 'angular-oauth2']);
  // .config(['OAuthProvider', function(OAuthProvider) {
  //   OAuthProvider.configure({
  //     baseUrl: 'http://topicos-api.herokuapp.com/',
  //     clientId: '5630be8511c8bd0003000006',
  //     clientSecret: 'At2dTNvNxlGoxU6c7eQ5kw' // optional
  //   });
  // }]);

 WEBApp.config([
  '$stateProvider',
  '$urlRouteProvider',
  function($stateProvider, $urlRouterProvider){
   $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'login/login.html',
      controller: 'LoginCtrl'
    })
    .state('tasks', {
      url: '/app',
      templateUrl: 'task/index.html',
      controller: 'taskCtrl'
    });

    $urlRouterProvider.otherwise('home');
 });


WEBApp.run(function($rootScope) {
  $rootScope.$on("$routeChangeStart", function (event, next, current) {
    if (sessionStorage.restorestate == "true") {
      $rootScope.$broadcast('restorestate'); 
      sessionStorage.restorestate = false;
    }
  });

  window.onbeforeunload = function (event) {
    $rootScope.$broadcast('savestate');
  };
});

WEBApp.run(function($http) {
  $http.defaults.headers.post = { 'Content-Type' : 'text/plain' };
});