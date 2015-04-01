'use strict';

angular.module('app')
  .config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/signin/student');

      $stateProvider
        .state('signin', {
          url: '/signin/:role',
          templateUrl: 'views/signin.html',
          controller: 'AuthCtrl'
        })
        .state('signup', {
          url: '/signup/:role',
          templateUrl: 'views/signup.html',
          controller: 'AuthCtrl'
        })
        .state('student', {
          url: '/student',
          templateUrl: 'views/student/main.html'
        })
        .state('student.update', {
          url: '/update',
          templateUrl: 'views/student/update.html'
        })
        .state('student.activity', {
          url: '/activity',
          templateUrl: 'views/student/activity.html'
        })
        .state('student.resume', {
          url: '/resume',
          templateUrl: 'views/student/resume.html'
        });

    }
  ]);
