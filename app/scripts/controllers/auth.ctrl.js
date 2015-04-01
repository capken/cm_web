'use strict';

angular.module('app.session')
  .controller('AuthCtrl', function($scope, $state, $stateParams, sessionUtil) {
    $scope.signinFailed = false;

    $scope.user = {
      'role' : $stateParams.role
    };

    $scope.signin = function() {
      sessionUtil.authenticate($scope.user)
        .success(function() {
          if($scope.user.role === 'student') {
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
  });
