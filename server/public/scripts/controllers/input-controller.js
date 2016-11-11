myApp.controller('inputController', ['$scope', '$http', function($scope, $http){
console.log('input controller is running');
$scope.budget = {};
$scope.expenses = {
};
console.log($scope.expense);
$scope.expenses.expense = [];
$scope.addNewExpense = function() {
    $scope.expenses.expense.push('');
  };

  $scope.removeChoice = function(z) {
    $scope.expenses.expense.splice(z, 1);
  };
// console.log($scope.expenses);
// $scope.addNewExpense = function() {
//     var newExpense = $scope.expenses.length+1;
//     $scope.expenses.expense.push('');
//   };
/////////////////////////////END OF CONTROLLER////////////////////////////////
}]);
