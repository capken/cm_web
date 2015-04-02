'use strict';

angular.module('app.session')
  .controller('SessionCtrl', function($scope, $state, $stateParams, $cookies, sessionUtil) {

    if($state.is('signout')) {
      sessionUtil.signout()
        .success(function() {
          $state.go('signin', { 'role' : $stateParams.role });
        })
        .error(function() {
          $state.go('signin', { 'role' : $stateParams.role });
        });
    } else {
      $scope.signinFailed = false;

      $scope.user = {};
      $scope.user.role = $stateParams.role;

      $scope.signin = function() {
        sessionUtil.authenticate($scope.user)
          .success(function(data) {
            if($scope.user.role === 'student') {
              $cookies['userName'] = data.name;
              $state.go('student.update');
            } else if($scope.user.role === 'employee') {
              //$state.go('company.jobs');
            }
          })
          .error(function(data, status) {
            if(status === 401) {
              $scope.signinFailed = true;
            }
          });
      };
    }
  });
