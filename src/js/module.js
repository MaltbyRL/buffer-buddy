'use strict';

var app = angular.module("bufferBud", ["ui.router"]);
// console.log("app345:", app)

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "partials/gamePage.html",
      controller: "homeCtrl"
    })
  $urlRouterProvider.otherwise("/");
});
