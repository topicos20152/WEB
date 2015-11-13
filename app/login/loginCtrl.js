taskControllers.controller('LoginController', ['$scope', '$http', '$location', 'AuthenticationService', 'auth',
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
          window.location.href="http://dev/sigaa-x-webapp/app/";
        }
      });
    };
  }
]);