var app = angular.module('app', [])

.directive('superHero', function () {
   return {
      restrict: 'E',
      scope: {},
      controller: function ($scope) {
         $scope.abilities = [];
         this.addSpeed = function () {
            $scope.abilities.push('speed');
         }
         this.addStrength = function () {
            $scope.abilities.push('strength');
         }
         this.addFlight = function () {
            $scope.abilities.push('flight');
         }

      },
      link: function (scope, element) {
         element.addClass('btn btn-primary');
         element.bind('mouseenter', function () {
            console.log(scope.abilities);
         })
      }
   }
})

.directive('speed', function () {
      return {
         require: 'superHero',
         link: function (scope, element, attrs, superHero) {
            superHero.addSpeed();
         }
      }
   })
   .directive('flight', function () {
      return {
         require: 'superHero',
         link: function (scope, element, attrs, superHero) {
            superHero.addFlight();
         },
         controller: function ($scope) {
            console.log($scope);
         }
      }
   })
   .directive('strength', function () {
      return {
         require: 'superHero',
         link: function (scope, element, attrs, superHero) {
            superHero.addStrength();
         }
      }
   })

.controller("control", function () {

});