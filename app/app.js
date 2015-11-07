'use strict';

var WEBApp = angular.module('WEBApp', ['ngRoute', 'taskControllers', 'angular-oauth2'])
  .config(['OAuthProvider', function(OAuthProvider) {
    OAuthProvider.configure({
      baseUrl: 'http://topicos-api.herokuapp.com/',
      clientId: '5630be8511c8bd0003000006',
      // clientSecret: 'At2dTNvNxlGoxU6c7eQ5kw' // optional
    });
  }]);

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

var taskControllers = angular.module('taskControllers', []);

WEBApp.value('clientId', 'a12345654321x');

taskControllers.controller('TaskListCtrl', ['$scope', '$http', function ($scope, $http) {
  $http.get('http://topicos-api.herokuapp.com/users/563cc7738995e50003000001/tasks?access_token=V3lwCwyV1oEZD2ovsCWCkg').success(function(data) {
    $scope.tasks = data;
  });
  $scope.orderProp = 'end_at';
}]);

taskControllers.controller('TaskDetailCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
  $scope.taskId = $routeParams.taskId;  
}]);

WEBApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/tasks', {
      templateUrl: 'partials/task-list.html',
      controller: 'TaskListCtrl'
    }).
    when('/tasks/:taskId', {
      templateUrl: 'partials/task-detail.html',
      controller: 'TaskDetailCtrl'
    }).
    otherwise({
      redirectTo: '/tasks'
    });
}]);

WEBApp.factory('userService', ['$rootScope', function ($rootScope) {

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
    $http.post('/api/authenticate', { username: username, password: password })
    .success(function (response) {
      callback(response);
    });
  }

  function SetCredentials(username, password) {
    var authdata = Base64.encode(username + ':' + password);

    $rootScope.globals = {
      currentUser: {
        username: username,
        authdata: authdata
      }
    };

    $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata; 
    $cookieStore.put('globals', $rootScope.globals);
  }

  function ClearCredentials() {
    $rootScope.globals = {};
    $cookieStore.remove('globals');
    $http.defaults.headers.common.Authorization = 'Basic';
  }
}]);