       var app = angular.module("Service", ['ngResource']); // moudule 



       app.controller('serviceController', ["$scope", "$resource", function ($scope, $resource) {
          $scope.getDetails = function () {
             var Github = $resource("https://api.github.com/users/:username", {});
             $scope.done = false;

             Github.get({
                   user: $scope.username
                }, //param data
                function (data) { // success function 
                   console.log(data);
                   $scope.user = data;
                   $scope.found = true;
                },

                function (data) { // error function
                   $scope.found = false;
                   $scope.done = true;
                }
             );
          }
       }]);


       app.controller('history', ["$scope", "$resource", '$http', function ($scope, $resource, $http) {
          $scope.events;
          $scope.params = {
             month: '',
             date: '',
          };
          $scope.history = function () {
             var url = 'http://history.muffinlabs.com/date/' + $scope.params.month + '/' + $scope.params.date;
             $http.get(url).success(function (response) {
                events_var = init(response);
             });
          }


          var init = function (response) {
             $scope.events = response.data.Events;
             console.log($scope.events);
          }

       }]);

       app.filter('reverse', function () {
          return function (items) {
             return items.slice().reverse();
          };
       });