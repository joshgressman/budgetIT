myApp.controller('inputController', ['$scope', '$http', '$location', function($scope, $http, $location){
console.log('input controller is running');

//object to be sent to the DB
$scope.budget = {};
//expenses that are dynamicaly created via add new function
$scope.expenses = {
};
console.log($scope.expenses);
//array that holds expenses
$scope.expenses.expense = [];

//creates another expense input on click
$scope.addNewExpense = function() {
    $scope.expenses.expense.push('');
  };
//removes expense input on click
  $scope.removeChoice = function(z) {
    $scope.expenses.expense.splice(z, 1);
  };

$scope.submitNewBudget = function () {
var data = $scope.budget;
  console.log(data);
$http.post('/budget', data)
.then(function(){
  console.log('POST /budget', data);
});
}


/////////////////////////////END OF CONTROLLER////////////////////////////////
}]);
