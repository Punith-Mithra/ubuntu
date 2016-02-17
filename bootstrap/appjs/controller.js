var app = angular.module('myApp',[])

.controller("cltr1", function($scope){
	this.data.message = "this"
	console.log($scope.data);
	$scope.fun = function(){
			console.log($scope.data);
		$scope.data.message = 'asshole';
	}
})
.controller("cltr2", function($scope){
	this.data.message = "this"
	console.log($scope.data);
});