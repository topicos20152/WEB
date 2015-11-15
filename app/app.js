'use strict';

var WEBApp = angular.module('WEBApp', ['ngRoute', 'taskControllers', 'angular-oauth2','angular.filter']);
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

// CONTROLLERS

var taskControllers = angular.module('taskControllers', []);

taskControllers.controller('TaskListCtrl', ['$scope', '$http', 'UserService',
  function ($scope, $http, UserService) {
    console.log(angular.fromJson(sessionStorage.userService));
    console.log(angular.fromJson(sessionStorage.userService)["access_token"]);
    $http.get('http://topicos-api.herokuapp.com/users/' + angular.fromJson(sessionStorage.userService)["username"] + '/tasks?access_token=' + angular.fromJson(sessionStorage.userService)["access_token"]).success(function(data) {
      $scope.tasks = data;
      angular.forEach($scope.tasks, function(x) {
        x["grouping"] = x["delivery_date"].replace(/\D/g,'').slice(0,8);
      });
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
          window.location.href="file:///Users/rhnascimento/Documents/UFRN/Dev%20Colaborativo/trabalho/WEB/app/index.html";
        }
      });
    };
  }
]);
