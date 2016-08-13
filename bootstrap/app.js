var myapp = angular.module('carouselApp', [])

.controller("carouselControl", function ($scope) {
        $scope.log = function (value) {
            console.log('value: ', value);
        }
        $scope.dataset = [1, 2, 3, 4, 5];
    })
    .directive("myCarousel", function () {
        return {
            restrict: "E"
            , scope: {}
            , template: '<input type="text" ng-model="value">{{value}} ' +
                '<div class="btn btn-primary" ng-click="done(data)"  ng-repeat="data in dataset">' +
                ' i am button {{data}}</div>'
            , controller: 'carouselControl'

        }
    })
    .controller("carouseControl", function ($scope) {
        $scope.log1 = function (value) {
            console.log('value from inner', value);
        }
    })