var app = angular.module('myApp', ["ui.router"])

.config(function ($stateProvider) {
      $stateProvider.state("index", {
         url: "",
         controller: 'firstCtrl as first',
         templateUrl: 'appjs/templates/controller.html'
      })
      $stateProvider.state("page2", {
         url: "/second",
         controller: 'secondCtrl as second',
         templateUrl: 'appjs/templates/controller-second.html'
      })
   })
   .service("greeting", function Greeting() {
      var greeting = this;
      greeting.message = "default"
   })
   .controller("firstCtrl", function firstCtrl(greeting) {
      var first = this;
      first.greeting = greeting;
   })
   .controller("secondCtrl", function secondCtrl(greeting) {
      var second = this;
      second.greeting = greeting;
   });