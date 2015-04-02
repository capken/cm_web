'use strict';

angular.module('app.company')
  .controller('CompanyCtrl', function($scope, $state, $stateParams, $cookies, sessionUtil) {

    if(sessionUtil.isValid() === false) {
      $state.go('signin', {'role' : 'employee'});
    }

    $scope.isCollapsed = false;
    $scope.user = {};
    $scope.user.name = $cookies['userName'];
  });

