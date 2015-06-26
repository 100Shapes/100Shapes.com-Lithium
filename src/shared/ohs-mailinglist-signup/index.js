module.exports = function(ngModule) {

    require('./ohs-mailinglist-signup.less');

    const angular = require('angular');

    ngModule
        .directive('ohsMailinglistSignup', ohsMailinglistSignup);

    function ohsMailinglistSignup($parse, $compile, DEFAULT_MAILINGLIST_SIGNUP_CONFIG) {
        return {
            restrict: 'E',
            scope: {},
            replace: true,    
            link(scope, elem, attrs) {

                let default_config = angular.copy(DEFAULT_MAILINGLIST_SIGNUP_CONFIG);
                let template = require('./ohs-mailinglist-signup.html');

                if (!attrs.config) {
                    scope.config = default_config
                } else {
                    const local_config = $parse(attrs.config)();
                    scope.config = angular.extend(default_config, local_config);
                }

                if (scope.config.slim) {
                    template = require('./ohs-mailinglist-signup--slim.html');
                }

                elem.html(template);
                $compile(elem.contents())(scope);
            }
        };
    }
};