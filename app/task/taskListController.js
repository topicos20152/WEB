var webapp = angular.module('webapp');

webapp.controller('TaskListController', ['$scope', '$http', 'TaskService', 
  function ($scope, $http, TaskService) {
    var todayDate = new Date();
    var todayDay = new Date().setHours(0, 0, 0, 0);

    $scope.todayDate = todayDate;
    $scope.todayDay = todayDay;
    $scope.orderProp = 'end_at';

    TaskService.getAll(function(tasks) {
      if(tasks) {
        var subjects = [];
        angular.forEach(tasks, function(task, key) {
          var deliveryDay = new Date(task.delivery_date).setHours(0, 0, 0, 0);
          var deliveryDate = new Date(task.delivery_date);
          var timeDiff = deliveryDate.getTime() - todayDate.getTime();
          var remainingDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
          var isThisWeek = remainingDays > 0 && remainingDays < 7; 
          var isToday = deliveryDay == todayDay; 
          var isDone = task.delivery_date > 0; 
          if(subjects.indexOf(task.course_title) == -1){
            subjects.push(task.course_title);
          }

          tasks[key]["delivery_date"] = deliveryDate;
          tasks[key]["delivery_day"] = deliveryDay;
          tasks[key]["is_this_week"] = isThisWeek;
          tasks[key]["is_today"] = isToday;
          tasks[key]["is_done"] = isDone;
        });

        $scope.tasks = tasks;
        $scope.subjects = subjects;

      } else {

      }
    });
    
    $scope.change = function(subject) {
      var chosenTasks = []
      TaskService.getAll(function(tasks) {
        angular.forEach(tasks, function(task, key) {
          if(task.course_title == subject || subject == null) {
            chosenTasks.push(task);
          }
        });
        console.log(subject);
        $scope.tasks = chosenTasks;
      });
    }
  }
]);