myApp.controller('inputController', ['$scope', '$http', '$location', function($scope, $http, $location){


//object to be sent to the DB
$scope.formData = {};
//expenses that are dynamicaly created via add new function

$scope.showAlert = false;
$scope.budgetStatus = function () {
  $scope.moneyIn = $scope.formData.income;
  $scope.moneyOut = $scope.dept;
  console.log($scope.moneyIn,$scope.moneyOut );
  if($scope.moneyIn < $scope.moneyOut){
    $scope.showAlert = true;
  }
}
$scope.submitNewBudget = function () {
var data = $scope.formData;
  console.log(data);
$http.post('/budget', data)
.then(function(){
  console.log('POST /budget', data);
  $scope.formData = {};
});
}


/////////////////////////////END OF CONTROLLER////////////////////////////////
}]);
