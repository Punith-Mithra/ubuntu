var App = angular.module('MyCalculator', []);



App.controller('Calculator', function ($scope) {
   $scope.calci = model();
   $scope.result = "";

   var number1 = '';
   var number2 = '';
   var flag = false;
   var dotFlag = false;
   var operation = '';
   var result = '';
   var temp = '';



   $scope.btnclick = function (button) {

      var value = button.value;
      var type = button.type;
      var result = this.result;

      if (type === 'equals') {
         if (flag && temp !== '') {
            equals(temp);
            number2 = '';
         }
      } else if (type === 'cancel') {
         number1 = number2 = result = temp = '';
         flag = false;
         dotFlag = false;
         $scope.result = '';
      } else if (type === "number") {
         append(value);

      } else if (type === "operator") {
         if (flag && number2 !== '') {
            equals(number2);
            number2 = '';
            value = '';
         }
         operation = value;
         dotFlag = false;
         flag = true;

      } else if (type === "dot") {
         if (!dotFlag) {
            append(value);
            dotFlag = true;
         }

      }

   };

   function append(value) {
      if (!flag) {
         number1 += value;
         $scope.result = number1;
      } else {
         number2 += value;
         temp += value;
         $scope.result = number2;
      }
   }

   function equals(value) {

      result = eval(number1 + '' + operation + '' + value);
      number1 = result;
      flag = true;
      $scope.result = result;

   }

})