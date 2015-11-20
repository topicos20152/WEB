WEBApp.factory('AuthenticationService', ['$http', '$cookieStore', '$rootScope', '$timeout', 'auth', 'UserService', function($http, $cookieStore, $rootScope, $timeout, UserService) {
  var service = {};

  service.Login = Login;
  service.SetCredentials = SetCredentials;
  service.ClearCredentials = ClearCredentials;

  return service;

  function Login(username, password, callback) {
    $http.post('http://topicos-api.herokuapp.com/api/v1/users/' + username + '/request_access_token', { username: username, password: password })
    .success(function (response) {
      callback(response);
    });
  }

  function SetCredentials(username, password, access_token) {

    UserService.model.username = username;
    UserService.model.access_token = access_token;
    console.log(UserService.model);

    // var authdata = Base64.encode(username + ':' + password);

    $rootScope.globals = {
      currentUser: {
        username: username,
        password: password,
        access_token: access_token,
      }
    };

    // $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata; 
    $cookieStore.put('globals', $rootScope.globals);
  }

  function ClearCredentials() {
    $rootScope.globals = {};
    $cookieStore.remove('globals');
    $http.defaults.headers.common.Authorization = 'Basic';
  }
}]);

angular.module('WEBApp').controller('LoginController', ['$scope', '$http', '$location', 'AuthenticationService', 'auth', 
  function ($scope, $http, $location, AuthenticationService) {
    // (function initController() {
    //   console.log("SUBMITET");
    //   AuthenticationService.ClearCredentials();
    // })();
    
    $scope.user = {};

    // public function index_options() {
    //     return $this->response(NULL, 200);
    // }

    $scope.login = function() {
      var username = this.username;
      var password = this.password;

      AuthenticationService.Login(username, password, function (response) {
        console.log("chegou aqui");
        if (response.value) {
          AuthenticationService.SetCredentials(username, password, response.value);
          window.location.href="/WEB/app/task/";
        }
      });
    };
  }
]);