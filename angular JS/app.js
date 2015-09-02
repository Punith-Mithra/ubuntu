var app = angular.module('myapp', []);
        var controllers={};

        controllers.simpleController = function($scope){
            $scope.cust = [{
                name: 'punith',
                city: 'hyderabad'
            }, {
                name: 'nikhil',
                city: 'chennai'
            }, {
                name: 'suraj',
                city: 'dehli'
            }];
            $scope.name1 = '222';

            $scope.addCustomer = function(){
                $scope.cust.push(
                    {name: $scope.newCustomer.name , 
                    city : $scope.newCustomer.name}
                )};

        };
        app.controller(controllers);

//        app.config(function($routeProvider){
//            $routeProvider
//                .when('/',{
//                    controller : 'simpleController',
//                    templateUrl: 'views/view1.html'
//                })
//                .when('/view2',{
//                    controller : 'simpleController',
//                    templateUrl: 'views/view2.html'
//                })
//                .otherwise({redirectTo: '/'});
//        });
