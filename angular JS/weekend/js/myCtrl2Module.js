angular.module('myCtrl2Module', [])
.controller('myCtrl2',[
	'$scope','$rootScope',
	function($scope,$rootScope){
	//$scope.myModel="THIS IS myCtrl2 MODEL CALLED myModel";
	/*$scope.toast = function(){
		$scope.myModel="MODEL data changed";
	}*/
	alert($rootScope.myModel);
}]);