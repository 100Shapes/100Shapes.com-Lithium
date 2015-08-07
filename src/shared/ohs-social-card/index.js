module.exports = function(ngModule) {

    ngModule
        .directive('ohsSocialCard', ohsSocialCard);

    function ohsSocialCard() {
        return {
            restrict: 'E',
            scope: {
                model: '='
            },
            replace: true,
            template: require('./ohs-social-card.html')
        };
    }

};