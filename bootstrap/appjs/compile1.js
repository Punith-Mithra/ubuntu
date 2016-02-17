var app = angular.module('app', [])

.directive('btn', function () {
   return {
      restrict: 'E',
      scope: {
         'val': '@'
      },
      template: '<button>{{val}}</button>',
      link: function (scope, element, attrs) {
         element.on('click', Function() {
            alert(attrs.val);
         })
      }
   }
})

.controller("control", ['$scope', '$compile', function ($scope, $compile) {
   $scope.addVal = function (v) {
      var btn = $compile('<btn val="' + v + '"></btn>')($scope);
      angular.element(document.getElementById('hoder')).append(btn);
   }
}]);