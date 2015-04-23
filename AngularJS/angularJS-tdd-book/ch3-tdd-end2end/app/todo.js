//A module for the application
angular.module('todo',[])
//A controller to manage the to-do items
.controller('TodoController',
  ['$scope', function($scope){
//the initialization of items on the controller scope
$scope.list = ['test','execute','refactor'];
$scope.add = function(item){
	$scope.list.push(item);
};
}]);