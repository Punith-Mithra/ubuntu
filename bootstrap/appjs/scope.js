var app = angular.module('app', [])

.factory('Data', function () {
   return {
      message: 'Im Data forom factory'
   }
})

.filter('reverse', function (Data) {
   return function (text) {
      return text.split('').reverse().join('').split(' ').reverse().join(' ') + ' ' + Data.message;
   }
})

.controller("ctrl", function ($scope, Data) { //here data is dependence injection form factory.
   $scope.data = Data;
   $scope.reverseMsg = function (message) {
      return message.split('').reverse().join('').split(' ').reverse().join(' ');
   }

})
.directive('btn', function () {
   return {
      restrict: 'E',
      scope: {         'val': '@'},
      template: '<button>{{val}}</button>',
      link: function (scope, element, attrs) {
         element.on('click', function() {
            alert(attrs.val);
         });
      }
   }
})

.controller("control", ['$scope', '$compile', function ($scope, $compile) {
   $scope.addVal = function (v) {
      var btn = '<btn val="' + v + '"></btn>';
      $compile(angular.element(btn))($scope);

      angular.element(document.getElementById('holder')).append(btn);
   }
}]);;