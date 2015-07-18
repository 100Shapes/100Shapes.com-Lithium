module.exports = function(ngModule) {

    ngModule
        .directive('ohsSocialCard', ohsSocialCard);

    function ohsSocialCard() {
        return {
            restrict: 'E',
            scope: {
                message: '@',
                username: '@',
                profileImageUrl: '@',
                url: '@',
                thumbnailImageUrl: '@'
            },
            replace: true,
            template: require('./ohs-social-card.html')
        };
    }

};