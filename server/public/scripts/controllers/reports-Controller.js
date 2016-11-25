myApp.controller('reportsController', ['$scope', '$http', function($scope, $http){

//**********************DYNAMIC SEARCH QUERY IN POST SERVICE *********///////
$scope.searchBy = {};
$scope.searchBy.name = '';
$scope.searchBy.month = '';

$scope.housingPaid = false;


//************************************************************************/////

//*********************POST REQUEST RETURN DATA*****************************//
//***************POST WITH DATA FOR CUSTOM OBJECT FIND CALL*****************//

$scope.budgetData = {};
//************************array of budget data for logic*******************//
$scope.budgetArray = [];
  $scope.getBudget = function () {
  var data = $scope.searchBy;
  $http.post('/search', data )
  .then(function(response){
  var expenseData = response.data;
  $scope.budgetData = expenseData;
  $scope.budgetArray = expenseData
  console.log('budgetData',$scope.budgetData);
  console.log('budgetArray',$scope.budgetArray);
  // console.log('new budget array', $scope.formData.budget);
});
}
//**************************************************************************//
console.log($scope.housingPaid);



/////////////////////////////END OF CONTROLLER////////////////////////////////
}]);
