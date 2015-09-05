var App = angular.module('MyCalculator', []);

App.controller('Calculator', function ($scope) {
   $scope.calci = model();
   $scope.result = "";
   $scope.btnclick = function (button) {

      var value = button.value;
      var type = button.type;
      var result = this.result;

      if (type === 'equals') {
         result = result.replace(' ', '')
         $scope.result = eval(result);
      } else if (type === 'cancel') {
         $scope.result = "";
      } else if (type === "number") {
         $scope.result += value;
      } else if (type === "operator") {
         $scope.result += ' ' + value + ' ';
      } else
         $scope.result += '' + value;
   };

})