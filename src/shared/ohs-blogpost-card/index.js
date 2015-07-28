module.exports = function(ngModule) {

    ngModule
        .directive('ohsBlogpostCard', ohsBlogpostCard);

    function ohsBlogpostCard() {
        return {
            restrict: 'E',
            scope: {
                model: '='
            },
            replace: true,
            template: require('./ohs-blogpost-card.html')
        };
    }

};