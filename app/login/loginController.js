var webapp = angular.module('webapp');

webapp.controller('LoginController', ['$scope', '$http', '$cookies', 'LoginService', 
  function ($scope, $http, $cookies, LoginService) {
    
    (function init() {
      console.log($cookies.get('globals').currentUser);
    })();
    
    $scope.user = {};

    $scope.login = function() {
      var username = this.username;
      var password = this.password;

      LoginService.requestAccessToken(username, password, function (accessToken) {
        if (accessToken) {
          LoginService.setCredentials(username, accessToken);
        } else {

        }
      });
    };
  }
]);

