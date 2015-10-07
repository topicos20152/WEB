'use strict';

var WEBApp = angular.module('WEBApp', [
  'ngRoute',
  'taskControllers'
]);

var taskControllers = angular.module('taskControllers', []);

taskControllers.controller('TaskListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    // $http.get('tasks/tasks.json').success(function(data) {
    //   $scope.tasks = data;
    // });

    $scope.tasks = [{
    'id': '1',
    'title': 'Resumo de artigo',
    'start_at': '2015-10-07T00:00:00',
    'end_at': '2015-10-25T23:59:59',
    'description':'Leiam o artigo X e resumam. Enviei um arquivo  para seus e-mails',
    'is_done': false,
    'course_name':'Tópicos em ES IV',
    'comment':'Não sei o que faço com vocês... Alunos preguiçosos'
  }, {
    'id': '2',
    'title': 'Leitura de livro',
    'start_at': '2015-10-07T00:00:00',
    'end_at': '2015-10-27T23:59:59',
    'description':'Sempre gostei do pequeno príncipe. Leiam.',
    'is_done': true,
    'course_name':'Estruturas de dados básicas II',
    'comment':'Não sei o que faço com vocês... Alunos preguiçosos'
  }];

    $scope.orderProp = 'end_at';
  }]);

taskControllers.controller('TaskDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.taskId = $routeParams.taskId;
  }]);

WEBApp.config(['$routeProvider',
  function($routeProvider) {
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