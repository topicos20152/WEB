'use strict';

angular.module('webapp', [
  'ngRoute',
  'ngCookies'
])

.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'task/taskList.html',
  })
  .otherwise({
    redirectTo: '/'
  });  

  $locationProvider.html5Mode(true);
})

.config(function ($httpProvider) {
  $httpProvider.defaults.headers.common = {};
  $httpProvider.defaults.headers.post = {};
  $httpProvider.defaults.headers.put = {};
  $httpProvider.defaults.headers.patch = {};
})

.run(function($rootScope, $window, $cookies) {
  $rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute){
    var logged = $cookies.get('accessToken');
    var goingLoginPage = $window.location.pathname.indexOf('/login') !== -1;

    if(!goingLoginPage && !logged) {
      event.preventDefault();
      $window.location.href = $window.location.href + 'login/login.html';
    }
  });
});
