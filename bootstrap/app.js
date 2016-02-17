var myapp = angular.module('carouselApp', [])

.controller("carouselControl", function($scope){
  $scope.log = function(value){
    console.log('value1',value);
  }
  $scope.dataset = [1,2,3,4,5];
})
.directive("myCarousel",function(){
  return{
    restrict: "E",
    scope:{
      done:"&", // this will link my method in the parent class. 
               // The name should match with the html elemnt where it is used.
      dataset : '='
    },
    template: '<input type="text" ng-model="value">{{value}} '+
              '<div class="btn btn-primary" ng-click="done({value:value})"  ng-repeat="data in dataset">'+
              ' i am button</div>'
              <!-- in ngclick the value should be an object-->

  }
})
.controller("carouseControl", function($scope){
  $scope.log1 = function(value){
    console.log('value from inner',value);
  }
})