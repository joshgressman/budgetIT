myApp.controller('reportsController', ['$scope', '$http', function($scope, $http){

//**********************DYNAMIC SEARCH QUERY IN POST SERVICE *********///////
$scope.searchBy = {};
$scope.searchBy.name = '';
$scope.searchBy.month = '';
//************************************************************************/////

//*********************POST REQUEST RETURN DATA*****************************//
//***************POST WITH DATA FOR CUSTOM OBJECT FIND CALL*****************//

$scope.budgetData = {};

  $scope.getBudget = function () {
  var data = $scope.searchBy;
  console.log(data);
  $http.post('/search', data )
  .then(function(response){
  var expenseData = response.data;
  console.log('response', expenseData);
  $scope.budgetData = expenseData;
  console.log('budgetData',$scope.budgetData)
  // console.log('new budget array', $scope.formData.budget);
});

}
//**************************************************************************//




/////////////////////////////END OF CONTROLLER////////////////////////////////
}]);
