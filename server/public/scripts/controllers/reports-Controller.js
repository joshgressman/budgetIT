myApp.controller('reportsController', ['$scope', '$http', function($scope, $http){
$scope.searchBy = {};
$scope.searchBy.name = '';
$scope.searchBy.month = '';

// $scope.budget = [];
$scope.budgetData = {};


// $scope.budget =  {};


// console.log("budget", $scope.budget )
// function getBudget() {
// $http.get('/budget')
// .then(function(response){
//   var expenseData = response.data;
//   console.log('response', expenseData);
//   $scope.budgetData = expenseData;
//   console.log('budgetData',$scope.budgetData)
//   // console.log('new budget array', $scope.formData.budget);
// });
//
// }

  $scope.getBudget = function () {
  var data = $scope.searchBy;
  console.log(data);
  $http.post('/search/', data )
  .then(function(response){
  var expenseData = response.data;
  console.log('response', expenseData);
  $scope.budgetData = expenseData;
  console.log('budgetData',$scope.budgetData)
  // console.log('new budget array', $scope.formData.budget);
});

}





/////////////////////////////END OF CONTROLLER////////////////////////////////
}]);
