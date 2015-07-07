module.exports = function(ngModule) {

    ngModule
        .directive('ohsServiceCard', ohsServiceCard);

    function ohsServiceCard() {
        return {
            restrict: 'E',
            scope: {
                slug: '@',
                title: '@',
                thumbnailImageUrl: '@'
            },
            replace: true,
            template: require('./ohs-service-card.html')
        };
    }

};