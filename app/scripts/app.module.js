'use strict';

angular.module('app.session', ['ngCookies']);
angular.module('app.student', ['ngCookies']);
angular.module('app.company', ['ngCookies']);

angular.module('app', [
  'app.session',
  'app.student',
  'app.company',
  'ui.router',
  'ui.bootstrap']
);

