angular.module('myCtrl1Module', [])
.controller('myCtrl1',[
	'$scope','$rootScope',
	function($scope,$rootScope){
	$rootScope.myModel="THIS IS myCtrl1 MODEL CALLED myModel";
	$rootScope.toast = function(){
		alert("CALLED WITH $rootScope");
	};
}]);