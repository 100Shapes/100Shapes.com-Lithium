// Libs
const angular = require('angular');
require('angular-ui-router');
require('angularjs-viewhead');
require('angular-sanitize');
require('angular-animate');
require('angular-google-analytics');
require('angular-off-canvas');
require('angular-scroll');
require('angular-uuid');
require('angular-climb');

// Styles
require('css/main.less');


const ngModule = angular.module('app', [
    'ui.router',
    'viewhead',
    'ngSanitize',
    'duScroll',
    'cn.offCanvas',
    'angular-google-analytics',
    'angular-uuid',
    'climb',
    'ngAnimate'
]);

require('./config')(ngModule);
require('./run')(ngModule);
require('./shared')(ngModule);
require('./states')(ngModule);
require('./constants')(ngModule);


angular.element(document).ready(function() {
    angular.bootstrap(document, ['app']);
});
