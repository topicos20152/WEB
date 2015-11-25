var webapp = angular.module('webapp');

webapp.factory('AuthService', ['$http', '$cookies', '$timeout', 
  function($http, $cookies, $timeout) {
    var service = {};

    service.requestAccessToken = requestAccessToken;
    service.setCredentials = setCredentials;
    service.clearCredentials = clearCredentials;

    return service;

    function requestAccessToken(username, password, callback) {
      $http.post('http://topicos-api.herokuapp.com/api/v1/users/' + username + '/request_access_token', { username: username, password: password })
      .then(function successCallback(response) {
        console.log('* Request Access Token::SUCCESS');

        callback(response.data.value);
      }, function errorCallback(response) {
        console.log('* Request Access Token::ERROR');
        console.log(response);
        console.log('* -------------------------- *');

        callback(false);
      });
    }

    function setCredentials(username, accessToken) {
      $cookies.put('username', username);
      $cookies.put('accessToken', accessToken);
    }

    function clearCredentials() {
      $cookies.remove('username');
      $cookies.remove('accessToken');
    }
  }
]);