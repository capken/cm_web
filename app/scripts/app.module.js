'use strict';

angular.module('app.session', ['ngCookies']);
angular.module('app.student', ['ngCookies']);
angular.module('app', ['app.session', 'app.student', 'ui.router', 'ui.bootstrap']);

