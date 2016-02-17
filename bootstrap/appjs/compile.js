var app = angular.module('app', [])

.directive('dummyPassword', function () {
   var validElement = angular.element('<div>{{model.input}}</div>');
   return {
      restrict: 'E',
      replace: true,
      template: "<div><input type='text' ng-model='model.input'></div>",
      compile: function (tEle) {
         tEle.append(validElement);
         return function (scope) {
            scope.$watch('model.input', function (value) {
               if (value === 'password') {
                  validElement.addClass('btn btn-primary');
               } else {
                  validElement.toggleClass('btn btn-primary');
               }
            })
         }

      }
   }
})

.controller("control", function () {

});