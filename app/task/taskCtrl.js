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