var App = angular.module('App', ['ngRoute']);



App.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
   $routeProvider
      .when('/abc', {
         templateUrl: 'xyz.html',
         controller: 'Add'
      })
      .when('/view2', {
         templateUrl: 'view2.html',
         controller: 'Add'
      });
   $locationProvider.html5Mode(false).hashPrefix('!');
}]);

App.controller('Add', ['$scope', function ($scope) {
   $scope.BookData = [{
         title: 'Apptitude',
         author: 'RS Agarwal',
         cost: '300',
         checked: false
      },
      {
         title: 'Mathematics',
         author: 'S Chand',
         cost: '450',
         checked: false

      }];

   $scope.checked = [];

   $scope.addBook = function (title, author, cost) {

      if (title !== '' && author != '' && !isNaN(cost)) {
         $scope.BookData.push({
            title: title,
            author: author,
            cost: cost,
            checked: false
         });

         $scope.book = {
            author: '',
            title: '',
            cost: ''
         }

      }

   };

   $scope.checkWatcher = function (book) {
      if (!book.checked) {
         $scope.checked.push(book);
         // book.checked = true;
         var index = $scope.BookData.indexOf(book);
         $scope.BookData[index].checked = true;
      } else {
         $scope.checked.splice($scope.checked.indexOf(book));
         // book.checked = false
         var index = $scope.BookData.indexOf(book);
         $scope.BookData[index].checked = false;
      }

   }

   $scope.remove = function () {
      console.log("entered loop");
      $scope.checked.forEach(function (item) {
         $scope.BookData.splice($scope.BookData.indexOf(item), 1);

      });
      $scope.checked = [];

   }

}]);


App.filter('rev', function () {
   return function (text) {
      return text && text.split('').reverse().join('');
   }
});