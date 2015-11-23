var myApp1=angular.module('myApp1', [
				'myCtrl1Module'
			]);

var myApp2=angular.module('myApp2', [
				'myCtrl2Module'
			]);

var myApp3=angular.module('myApp3', [
				'myCtrl3Module'
			]);

angular.element(document).ready(function(){
	angular.bootstrap(document.getElementById('id1'), ['myApp1']);
	angular.bootstrap(document.getElementById('id3'), ['myApp3']);
});