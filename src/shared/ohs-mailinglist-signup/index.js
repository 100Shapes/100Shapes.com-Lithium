module.exports = function(ngModule) {

    require('./ohs-mailinglist-signup.less');

    const angular = require('angular');

    ngModule
        .directive('ohsMailinglistSignup', ohsMailinglistSignup);

    function ohsMailinglistSignup($parse, $compile, DEFAULT_MAILINGLIST_SIGNUP_CONFIG) {
        return {
            restrict: 'E',
            scope: {},
            controller: 'OhsMailinglistSignupCtrl as vm',
            replace: true,
            template(tElem, tAttrs) {

                let config = $parse(tAttrs.config)();

                if (config && config.slim) {
                    return require('./ohs-mailinglist-signup--slim.html');
                }

                return require('./ohs-mailinglist-signup.html');
            },
            link($scope, elem, attrs) {

                let default_config = angular.copy(DEFAULT_MAILINGLIST_SIGNUP_CONFIG);

                if (!attrs.config) {
                    $scope.config = default_config
                } else {
                    const local_config = $parse(attrs.config)();
                    $scope.config = angular.extend(default_config, local_config);
                }

            }
        };
    }

    ngModule.controller('OhsMailinglistSignupCtrl', OhsMailinglistSignupCtrl);

    function OhsMailinglistSignupCtrl($location) {
        let vm = this;

        vm.$location = $location;
    }
};