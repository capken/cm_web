'use strict';

angular.module('app.student')
  .controller('StudentCtrl', function($scope, $state, $stateParams, $cookies, sessionUtil) {

    if(sessionUtil.isValid() === false) {
      $state.go('signin', {'role' : 'student'});
    }

    $scope.isCollapsed = false;
    $scope.user = {};
    $scope.user.name = $cookies.userName;
  });

