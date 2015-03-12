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


angular.module('caimei.auth', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', 
  function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/student/login');

    $stateProvider.state('login', {
      url: '/:role/login',
      templateUrl: 'views/login.html',
      controller: 'AuthCtrl'
    });

    $stateProvider.state('signup', {
      url: '/:role/signup',
      templateUrl: 'views/signup.html',
      controller: 'AuthCtrl'
    });

  }
]);
