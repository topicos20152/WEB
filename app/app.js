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

    $scope.tasks = [
  {
    'id': '1',
    'title': 'Resumo de artigo',
    'start_at': '2015-10-07T00:00:00',
    'end_at': '2015-10-25T23:59:59',
    'description':'Leiam o artigo X e resumam. Enviei um arquivo para seus e-mails',
    'is_done': false,
    'course_name':'Tópicos em ES IV',
    'comment':'Não sei o que faço com vocês... Alunos preguiçosos'
  },

  {
    'id': '2',
    'title': 'Leitura de livro',
    'start_at': '2015-10-07T00:00:00',
    'end_at': '2015-10-27T23:59:59',
    'description':'Sempre gostei do pequeno príncipe. Leiam.',
    'is_done': true,
    'course_name':'Estruturas de dados básicas II',
    'comment':'Não sei o que faço com vocês... Alunos preguiçosos'
  },

  {
    'id': '3',
    'title': 'Resumo de artigo 2!!!',
    'start_at': '2015-09-21T12:00:00',
    'end_at': '2015-10-23T17:59:59',
    'description':'Leiam o artigo X e resumam. Enviei um arquivo para seus e-mails',
    'is_done': false,
    'course_name':'Tópicos em ES IV',
    'comment':'if(alunos == preguiçosos) return reprovar;'
  },

  {
    'id': '4',
    'title': 'Fujam do país',
    'start_at': '2015-10-07T00:00:00',
    'end_at': '2015-10-26T23:59:59',
    'description':'Enquanto há tempo!!',
    'is_done': false,
    'course_name':'Arquivo X',
    'comment':'Já fiz as malas. Vlw flw'
  },

  {
    'id': '5',
    'title': 'Termine de mockar',
    'start_at': '2015-10-07T00:00:00',
    'end_at': '2015-11-28T23:59:59',
    'description':'Você já fez 5 mocks com sucesso. ',
    'is_done': false,
    'course_name':'procrastinação',
    'comment':'Vocês têm futuro. Eu confio'
  },

  {
    'id': '6',
    'title': 'Testando fé nos mocks',
    'start_at': '2015-10-07T00:00:00',
    'end_at': '2015-10-25T23:59:59',
    'description':'Será que alguém lê meus mocks',
    'is_done': true,
    'course_name':'Tópicos em ES IV',
    'comment':'Se você ler isso, quer dize que fui útil'
  },

  {
    'id': '7',
    'title': 'A infantilidade',
    'start_at': '2015-10-07T00:00:00',
    'end_at': '2015-10-22T21:59:59',
    'description':'É inerente à criança',
    'is_done': false,
    'course_name':'alor olar 3',
    'comment':'bjs vlw flw oi renato'
  },

  {
    'id': '8',
    'title': 'PROFESSIONAL MOCKING',
    'start_at': '2015-10-07T00:00:00',
    'end_at': '2015-10-30T13:59:59',
    'description':'MOCKS PROFISSIONAIS A GENTE SE LIGA EM VC',
    'is_done': true,
    'course_name':'Tópicos em ES XIII',
    'comment':'meu deusssss'
  },

  {
    'id': '9',
    'title': 'Será que alguém se importa comigo',
    'start_at': '2015-10-07T00:00:00',
    'end_at': '2015-11-02T23:59:59',
    'description':'Eu me corto quando fico triste',
    'is_done': false,
    'course_name':'Tópicos em ES III',
    'comment':'Mas ninguém lê meus mocks para saber'
  },

  {
    'id': '10',
    'title': 'O último',
    'start_at': '2015-10-21T00:00:00',
    'end_at': '2015-10-23T23:59:59',
    'description':'Talvez esse seja o fim da minha issue',
    'is_done': false,
    'course_name':'Chega de tópicos',
    'comment':'STOL FELIZ PAKS'
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