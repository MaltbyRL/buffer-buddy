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
    .state("browse", {
      url: "/browse",
      templateUrl: "partials/gamePage.html",
      controller: "browseCtrl"
    })
    .state("favorites", {
      url: "/favorites",
      templateUrl: "partials/favoritesTable.html",
      controller: "favoritesCtrl"
    })
  $urlRouterProvider.otherwise("/");
});
