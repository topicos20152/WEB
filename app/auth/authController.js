var webapp = angular.module('webapp');

webapp.controller('AuthController', ['$scope', '$http', '$window', '$cookies', 'AuthService', 
  function ($scope, $http, $window, $cookies, AuthService) {
    
    (function init() {
    })();
    
    $scope.user = {};

    $scope.login = function() {
      var username = this.username;
      var password = this.password;

      AuthService.requestAccessToken(username, password, function (accessToken) {
        if (accessToken) {
          AuthService.setCredentials(username, accessToken);
          $window.location.href = "";
        } else {

        }
      });
    };

    $scope.logout = function() {
      console.log("LOGOUT");
      AuthService.clearCredentials();
      $window.location.href = $window.location.href + 'auth/login.html';
    }
  }
]);

