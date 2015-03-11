'use strict';

angular.module('caimei', ['ui.router', 'ui.bootstrap'])

.config(['$stateProvider', '$urlRouterProvider', 
  function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider.state('home', {
      url: '/home',
      templateUrl: 'views/home.html'
    });
  }
]);
