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