module.exports = function(ngModule) {

    ngModule
        .directive('ohsServiceCard', ohsServiceCard);

    function ohsServiceCard() {
        return {
            restrict: 'E',
            scope: {
                model: '='
            },
            replace: true,
            template: require('./ohs-service-card.html')
        };
    }

};