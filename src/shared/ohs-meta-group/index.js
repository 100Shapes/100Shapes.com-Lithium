module.exports = function(ngModule) {

    const url = require('url');

    ngModule
        .directive('ohsMetaGroup', ohsMetaGroup);

    function ohsMetaGroup(COMPANY_META, DEFAULT_SOCIAL_IMAGE, $location) {
        return {
            restrict: 'E',
            scope: {
                title: '@',
                description: '@',
                image: '@',
                creator: '@?',
                date: '@?',
                category: '@?'
            },
            template: require('./ohs-meta-group.html'),
            link: function ($scope, elem, attrs) {
                if (!attrs.creator) {
                    attrs.creator = COMPANY_META.social.twitter.handle;
                }
                if (!attrs.title) {
                    throw new Error(`Please specify a 'title' attribute`);
                }
                if (!attrs.description) {
                    throw new Error(`Please specify a 'description' attribute`);
                }
                if (!attrs.image) {
                    attrs.image = url.resolve($location.absUrl(), DEFAULT_SOCIAL_IMAGE);
                }
                $scope.site_name = COMPANY_META.site.name;
                $scope.$location = $location;
            }
        };
    }

};