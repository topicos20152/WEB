WEBApp.factory('auth', ['$http', '$cookieStore', '$rootScope', '$timeout', 'UserService', function($http, $cookieStore, $rootScope, $timeout, UserService) {
  var service = {};

  service.Login = Login;
  service.SetCredentials = SetCredentials;
  service.ClearCredentials = ClearCredentials;

  return service;

  function Login(username, password, callback) {
    $http.post('http://topicos-api.herokuapp.com/users/' + username + '/request_access_token', { username: username, password: password })
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