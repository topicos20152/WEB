var taskControllers = angular.module('taskControllers', []);

taskControllers.controller('TaskListCtrl', ['$scope', '$http', 'UserService', 'user',
  function ($scope, $http, UserService) {
    console.log(angular.fromJson(sessionStorage.userService));
    console.log(angular.fromJson(sessionStorage.userService)["access_token"]);
    $http.get('http://topicos-api.herokuapp.com/users/' + angular.fromJson(sessionStorage.userService)["username"] + '/tasks?access_token=' + angular.fromJson(sessionStorage.userService)["access_token"]).success(function(data) {
      $scope.tasks = data;
    });
    $scope.orderProp = 'end_at';
  }
]);

taskControllers.controller('TaskDetailCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
  $scope.taskId = $routeParams.taskId;  
}]);