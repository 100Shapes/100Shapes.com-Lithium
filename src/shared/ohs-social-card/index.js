module.exports = function(ngModule) {

    ngModule
        .directive('ohsSocialCard', ohsSocialCard);

    function ohsSocialCard() {
        return {
            restrict: 'E',
            scope: {
                message: '@',
                author: '@',
                url: '@',
                thumbnailImageUrl: '@'
            },
            replace: true,
            template: require('./ohs-social-card.html')
        };
    }

};