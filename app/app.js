'use strict';

var WEBApp = angular.module('WEBApp', ['ngRoute', 'taskControllers', 'angular-oauth2']);
  // .config(['OAuthProvider', function(OAuthProvider) {
  //   OAuthProvider.configure({
  //     baseUrl: 'http://topicos-api.herokuapp.com/',
  //     clientId: '5630be8511c8bd0003000006',
  //     clientSecret: 'At2dTNvNxlGoxU6c7eQ5kw' // optional
  //   });
  // }]);

// WEBApp.config(function($routeProvider){
//   $routeProvider.
//     when('/', {
//       templateUrl: 'index.html',
//       // controller: 'LoginController'
//     }).
//     when('/a', {
//       templateUrl: 'index.html',
//       // controller: 'LoginController'
//     }).

//     when('/login', {
//       templateUrl: 'index.html',
//       // controller: 'LoginController'
//     }).
//     otherwise({
//       redirectTo: '/app/',
//     });
// });

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



WEBApp.factory('UserService', ['$rootScope', function ($rootScope) {

  var service = {

    model: {
      username: '',
      access_token: ''
    },

    SaveState: function () {
      sessionStorage.userService = angular.toJson(service.model);
    },

    RestoreState: function () {
      service.model = angular.fromJson(sessionStorage.userService);
    }
  }

  $rootScope.$on("savestate", service.SaveState);
  $rootScope.$on("restorestate", service.RestoreState);

  return service;
}]);


WEBApp.factory('AuthenticationService', ['$http', '$cookieStore', '$rootScope', '$timeout', 'UserService', function($http, $cookieStore, $rootScope, $timeout, UserService) {
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

// CONTROLLERS

var taskControllers = angular.module('taskControllers', []);

taskControllers.controller('TaskListCtrl', ['$scope', '$http', '$cookieStore', 'UserService', function ($scope, $http, $cookieStore, UserService) {
    var username = $cookieStore.get('globals').currentUser['username'];
    var access_token = $cookieStore.get('globals').currentUser['access_token'];
    var today = new Date();
    
    $scope.week_date = new Date(today);
    $scope.week_date.setDate(today.getDate() + 6);


    $http.get('http://topicos-api.herokuapp.com/api/v1/users/' + username + '/tasks?access_token=' + access_token)
      .success(function(data) {
        
        angular.forEach(data, function(value, key) {
          data[key]["delivery_date"] = new Date(value.delivery_date);
        });

        $scope.tasks = data;
      });

    $scope.orderProp = 'end_at';
  }
]);

taskControllers.controller('TaskDetailCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
  $scope.taskId = $routeParams.taskId;  
}]);

taskControllers.controller('LoginController', ['$scope', '$http', '$location', 'AuthenticationService', 
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
        if (response.value) {
          AuthenticationService.SetCredentials(username, password, response.value);
          window.location.href="/WEB/app/";
        }
      });
    };
  }
]);
