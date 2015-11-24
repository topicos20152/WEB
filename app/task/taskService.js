var webapp = angular.module('webapp');

webapp.factory('TaskService', ['$http', '$cookies', 
  function($http, $cookies) {
    var service = {};

    service.getAll = getAll;

    return service;

    function getAll(callback) {
      var username = $cookies.get('username');
      var access_token = $cookies.get('accessToken');

      $http.get('http://topicos-api.herokuapp.com/api/v1/users/' + username + '/tasks?access_token=' + access_token)
      .then(function successCallback(response) {
        console.log('* Get All Tasks::SUCCESS');
        console.log(response);
        console.log('* --------------------- *');

        callback(response.data);
      }, function errorCallback(response) {
        console.log('* Get All Tasks::ERROR');
        console.log(response);
        console.log('* ------------------- *');

        callback(false);
      });
    }
  }
]);