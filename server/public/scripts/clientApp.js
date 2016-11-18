var myApp = angular.module('myApp', ['ngRoute']);

//switch to UI Router
myApp.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/welcome', {
      templateUrl: '/views/partials/welcome.html',
      controller: "welcomeController"
    })
    .when('/input', {
        templateUrl: '/views/partials/input.html',
        controller: "inputController"
      })
    .otherwise({
      redirectTo: '/welcome'
    })

}]);
