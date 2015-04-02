'use strict';

angular.module('app')
  .config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/signin/student');

      $stateProvider
        .state('signin', {
          url: '/signin/:role',
          templateUrl: 'views/signin.html',
          controller: 'SessionCtrl'
        })
        .state('signup', {
          url: '/signup/:role',
          templateUrl: 'views/signup.html',
          controller: 'SessionCtrl'
        })
        .state('signout', {
          url: '/signout/:role',
          controller: 'SessionCtrl'
        })

        .state('student', {
          url: '/student',
          templateUrl: 'views/student/main.html',
          controller: 'StudentCtrl'
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
        })

        .state('company', {
          url: '/company',
          templateUrl: 'views/company/main.html',
          controller: 'CompanyCtrl'
        })
        .state('company.job', {
          url: '/job',
          templateUrl: 'views/company/job.html'
        })
        .state('company.applicant', {
          url: '/applicant',
          templateUrl: 'views/company/applicant.html'
        })
        .state('company.activity', {
          url: '/activity',
          templateUrl: 'views/company/activity.html'
        })
        .state('company.talent', {
          url: '/talent',
          templateUrl: 'views/company/talent.html'
        })
        .state('company.profile', {
          url: '/profile',
          templateUrl: 'views/company/profile.html'
        });

    }
  ]);
