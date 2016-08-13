var app = angular.module('app', [])

.directive('myMenu', function () {
    return {
        restrict: 'E'
        , controller: function ($scope) {
            $scope.map = []
            this.register = function (dataset) {
                $scope.map.push(dataset);
            }
        }
        , scope: {}
        , transclude: true
        , template: '<div>{{map | json}}<div ng-transclude></div></div>'
        , link: function ($scope, $ele, attrs) {
            console.log($scope, $ele, attrs)
        }
    }


})

.directive('menuItem', function () {
    return {
        restrict: 'E'
        , require: '^myMenu'
        , replace: true
        , scope: {}
        , link: function ($scope, $ele, attrs, ctrl) {
            ctrl.register({
                key: attrs.key
                , value: attrs.action
            });
            $ele.remove();
        }
    }


});