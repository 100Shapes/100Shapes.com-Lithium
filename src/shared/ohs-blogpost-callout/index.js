module.exports = function(ngModule) {

    require('./ohs-blogpost-callout.less');

    ngModule
        .directive('ohsBlogpostCallout', ohsBlogpostCallout);

    function ohsBlogpostCallout(DEFAULT_BLOGPOST_CALLOUT_CONFIG) {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                model: '=',
                message: '@?'
            },
            template: require('./ohs-blogpost-callout.html'),
            link($scope, elem, attrs) {
                if (!attrs.message) {
                    $scope.intro = DEFAULT_BLOGPOST_CALLOUT_CONFIG.message;
                }
            }
        };
    }


};