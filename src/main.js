// Libs
const angular = require('angular');
require('angular-ui-router');
require('angularjs-viewhead');
require('angular-sanitize');
require('angular-animate');
require('angular-google-analytics');
require('angular-uuid');
require('ngstorage');
require('angular-climb');
require('exports?window.Headroom!headroom');
require('headroom.js/dist/angular.headroom');
require('polyfill-function-prototype-bind');


// Styles
require('css/main.less');


const ngModule = angular.module('app', [
    'ui.router',
    'viewhead',
    'ngSanitize',
    'angular-google-analytics',
    'angular-uuid',
    'headroom',
    'angular-climb',
    'ngAnimate',
    'ngStorage'
]);

require('./config')(ngModule);
require('./run')(ngModule);
require('./shared')(ngModule);
require('./states')(ngModule);
require('./constants')(ngModule);


angular.element(document).ready(function() {
    angular.bootstrap(document, ['app']);
});
