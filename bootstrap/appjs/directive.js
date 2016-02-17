var app = angular.module('app', [])

.directive('outer', function () {
   'use strict';
   function control(){
      console.log('outer  controller');
   }

   function preLink(){
      console.log('Outer Pre');
   }
   function postLink(){
      console.log('Outer Post');
   }

   var object ={
      'restrict' : 'E',
      'replace'   : true,
      'scope'     : {},
      'transclude': true,
      'template'  : '<div><h2>hello from outer</h2><div ng-transclude></div></div>',
      'controller':control,      
      'link': {
            'pre': preLink,
            'post': postLink
      },
   }

})


.directive('inner', function () {
   'use strict';
   function control(){
      console.log('inner  controller1');
   }

   function preLink($scope,$element,attrs){
      console.log('inner Pre');
   }
   function postLink(){
      console.log('inner Post');
   }

   var object ={
      'restrict' : 'E',
      'replace'   : true,
      'scope'     : {},
      'template'  : '<div><h2>hello from inner</h2></div>',
      'controller': control,      
      'link': {
            'pre': preLink,
            'post': postLink
      },
   }

   return object;
})

.directive("leave", function () {
   return function (scope, element, attrs) {
      element.bind('mouseleave', function () {
         scope.$apply(attrs.leave);
         console.log(scope.newval, scope.newfun());
      })
   }
});