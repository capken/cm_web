'use strict';

angular.module('caimei.auth')
.controller('AuthNavCtrl', function($scope, $state, $stateParams) {

  $scope.roles = [
    { 'name': 'student', 'label': '学生' },
    { 'name': 'company', 'label': '公司' },
    { 'name': 'school', 'label': '学校' }
  ];

  $scope.isRole = function(role) {
    if($state.is('login') || $state.is('signup')) {
      if($stateParams.role === role) {
        return true;
      }
    }

    return false;
  };
})
.controller('AuthCtrl', function($scope, $state, $stateParams) {
  $scope.auth = {
    'role': $stateParams.role
  };

  $scope.login = function() {
    console.log(JSON.stringify($scope.auth));
  };
});
