var app = angular.module('myApp', []);

app.controller('Demo', function ($scope) {
   $scope.counter = 0;
   $scope.add = function (amount) {
      $scope.counter += amount;
   };
   $scope.substract = function (amount) {
      $scope.counter -= amount;
   };
});


/*
 * // date program...
app.controller('MyDate', function ($scope) {
   $scope.person = {
      name: "Punith"
   };

   var updateClock = function () {
      $scope.clock = new Date();
   };

   var timer = setInterval(function () {
      $scope.$apply(updateClock);
   }, 1);

   updateClock();
})

*/

/*
 * player example 
app.controller('PlayerController', ['$scope', function ($scope) {

   $scope.playing = false;
   $scope.audio = document.createElement('audio');
   $scope.audio.src = '/media/abc.mp3';
   $scope.play = function () {
      $scope.audio.play();
      $scope.playing = true;
   };
   $scope.stop = function () {
      $scope.audio.pause();
      $scope.playing = false;
   };
   $scope.audio.addEventListener('ended', function () {
      //$scope.$apply(function () {
      $scope.stop();
      //});
   });
}]);

app.controller('RelatedController', ['$scope', function ($scope) {


}]);

*/

/*
 * Second Example for ingeritance or dependency
app.controller('parentController', function ($scope) {
   $scope.person = {
      greered: false
   };
});

app.controller('childController', function ($scope) {
   $scope.sayHello = function () {
      if ($scope.person.greered)
         $scope.person.greered = false;
      else
         $scope.person.greered = true;
   };
});

*/

/*
 * first example.......
 
app.controller('MyController', function ($scope) {
   $scope.person = {
      name: "Punith Mithra"
   };
});
*/
/*

app.run(function ($rootScope) {
   $rootScope.name = "namess"; // this goes to ng-model

});

*/