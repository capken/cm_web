'use strict';

angular.module('app.session')
  .factory('sessionUtil', function($http) {
    return {
      authenticate: function(user) {
        return $http.post('/api/session', {
          'role': user.role,
          'email': user.email,
          'password': user.password
        });
      }
    };
  });
