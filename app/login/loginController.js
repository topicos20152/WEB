var webapp = angular.module('webapp');

webapp.controller('LoginController', ['$scope', '$http', '$window', '$cookies', 'LoginService', 
  function ($scope, $http, $window, $cookies, LoginService) {
    
    (function init() {
    })();
    
    $scope.user = {};

    $scope.login = function() {
      var username = this.username;
      var password = this.password;

      LoginService.requestAccessToken(username, password, function (accessToken) {
        if (accessToken) {
          LoginService.setCredentials(username, accessToken);
          $window.location.href = $window.location.href;
        } else {

        }
      });
    };
  }
]);

