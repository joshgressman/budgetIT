myApp.controller('reportsController', ['$scope', '$http', function($scope, $http){
console.log('welcome controller is running');

$scope.budget = [];
$scope.formData = {};
getBudget();
function getBudget() {
$http.get('/budget')
.then(function(response){
  console.log('Get / budget', response.data)
  var budgetData = response.data;
  $scope.formData.budget = budgetData;
  console.log('new budget array', $scope.formData.budget);
});

}


/////////////////////////////END OF CONTROLLER////////////////////////////////
}]);
