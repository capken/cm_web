'use strict';

angular.module('app.session')
  .factory('sessionUtil', function($http, $cookies) {
    return {
      authenticate: function(user) {
        return $http.post('/api/session', {
          'role': user.role,
          'email': user.email,
          'password': user.password
        });
      },
      signout: function() {
        delete $cookies.userName;
        return $http.delete('/api/session');
      },
      isValid: function() {
        return angular.isDefined($cookies.userName);
      }
    };
  });
