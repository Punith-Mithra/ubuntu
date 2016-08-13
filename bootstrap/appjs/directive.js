var app = angular.module('app', [])

.directive('taskManager', function () {
    'use strict';

    function control() {
        this.dataSet = [{
            title: "first Task"
            , body: "Content in the first task"
        }, {
            title: "Second Task"
            , body: "Content in the second task"
        }]
    }

    function preLink() {

    }

    function postLink($scope, $element, attrs, ctrl) {
        $scope.dataSet = ctrl.dataSet;
        $scope.close = function (index) {
            $scope.dataSet.splice(index, 1);
        }
    }

    var object = {
        'restrict': 'E'
        , 'replace': true
        , 'scope': {}
        , 'transclude': true
        , 'template': '<div class="col-sm-12 container">' +
            '<div><button class="btn btn-primary">Click me</button></div>' +
            '<div class="col-sm-4">' +
            '<div class="panel panel-primary" ng-repeat="item in dataSet">' +
            '<div class="panel-heading"><a class="btn btn-warning" ng-click="close($index)">X</a><label >{{item.title}}</label> </div>' +
            '<div class="panel-body"><p>{{item.body}}</p></div>' +
            '</div>' +
            '</div>' +
            '</div>'
        , 'controller': control
        , 'link': {
            'pre': preLink
            , 'post': postLink
        }
    }

    return object;

})


.directive('inner', function () {
    'use strict';

    function control() {
        console.log('inner  controller1');
    }

    function preLink($scope, $element, attrs) {
        console.log('inner Pre');
    }

    function postLink() {

    }

    var object = {
        'restrict': 'E'
        , 'replace': true
        , 'scope': {}
        , 'template': '<div><h2>hello from inner</h2></div>'
        , 'controller': control
        , 'link': {
            'pre': preLink
            , 'post': postLink
        }
    }

    return object;
})