myApp.controller('reportsController', ['$scope', '$http', function($scope, $http){

//**********************DYNAMIC SEARCH QUERY IN POST SERVICE *********///////
$scope.budgetData = {};
$scope.budgets = [];
$scope.budget = [];
$scope.searchBy = {};
// $scope.searchBy.name = '';
$scope.searchBy.month = '';
$scope.css = '';



$scope.itemPaid = function () {
  $scope.css = 'item-paid';
  return;
};

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
  $scope.budgetData.budgets = expenseData;
  $scope.budgetArray = expenseData
  console.log('budgetData',$scope.budgetData);
  console.log('budgetArray',$scope.budgetArray);
  // console.log('new budget array', $scope.formData.budget);

});
}

$scope.updateBudget = function (budget) {
  console.log("object", $scope.budgetArray[0]._id);
  var id = $scope.budgetArray[0]._id;
  console.log('budget id', id)
  $http.put('/budget/' + id, budget)
  .then(function(){
    console.log('PUT / report', id);
  // $scope.getBudget();
  });
};

////////////Delete month function///////
$scope.deleteBudget = function (budget){
  
}

/////////////////////////////END OF CONTROLLER////////////////////////////////
}]);
