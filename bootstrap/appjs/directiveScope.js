var app = angular.module('app', [])

.controller("controlAttr", function ($scope) {
   $scope.flavor = "blackberry";
   $scope.flavor1 = "blackberry1";
   $scope.done = function () {
      console.log($scope.flavor1 + 'done')
      $scope.flavor1 = 'success';
   }

})

.directive('kidAttr', function () {
   return {
      restrict: 'E',
      scope: {
         flavor: '=',
         done: '&'
      },
      template: '<input type="text" ng-model="flavor">' +
         '<div class="btn btn-primary" ng-click="done()"> click me</div>' +
         '<h1>{{flavor}}</h1>'
   }
})

// & example
.controller("controlFun", function ($scope) {
   $scope.done = function (value) {
      console.log(value + 'done')
   }

})

.directive('kidFun', function () {
   return {
      restrict: 'E',
      scope: {
         done: '&'
      },
      template: '<input type="text" ng-model="value">' +
         '<div class="btn btn-primary" ng-click="done({value:value})"> click me</div>' +
         '<h1>{{chore}}</h1>'

   }
});