myApp.controller('inputController', ['$scope', '$http', '$location', function($scope, $http, $location){
console.log('input controller is running');

//object to be sent to the DB
$scope.budget = {};
//expenses that are dynamicaly created via add new function


$scope.submitNewBudget = function () {
var data = $scope.budget;
  console.log(data);
$http.post('/budget', data)
.then(function(){
  console.log('POST /budget', data);
  $scope.budget = {};
});
}


/////////////////////////////END OF CONTROLLER////////////////////////////////
}]);
