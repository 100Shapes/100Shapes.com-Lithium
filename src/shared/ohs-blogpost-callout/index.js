module.exports = function(ngModule) {

    require('./ohs-blogpost-callout.less');
    const angular = require('angular');

    ngModule
        .directive('ohsBlogpostCallout', ohsBlogpostCallout);

    function ohsBlogpostCallout(DEFAULT_BLOGPOST_CALLOUT_CONFIG, $parse) {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                config: '='
            },
            template: require('./ohs-blogpost-callout.html'),
            controller: 'OhsBlogpostCallout as vm',
            bindToController: true,
            link($scope, elem, attrs) {

                let default_config = angular.copy(DEFAULT_BLOGPOST_CALLOUT_CONFIG);

                if (!attrs.config) {
                    throw new Error(`Please specify a 'config' attribute.`);
                }

                const local_config = $parse(attrs.config)();

                if (!local_config.slug) {
                    throw new Error(`Please specify a 'config.slug' attribute.`);
                }

                $scope.config = angular.extend(default_config, local_config);

            }
        };
    }

    ngModule.controller('OhsBlogpostCallout', OhsBlogpostCallout);

    function OhsBlogpostCallout(BlogContentService) {
        let vm = this;

        BlogContentService.one(vm.config.slug).then((post) => {
            vm.model = post;
        });
    }

};