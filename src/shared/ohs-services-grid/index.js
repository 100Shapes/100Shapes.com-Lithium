module.exports = function(ngModule) {

    ngModule
        .directive('ohsServicesGrid', ohsServicesGrid);

    function ohsServicesGrid() {
        return {
            restrict: 'E',
            scope: {
                services: '='
            },
            replace: true,
            template: require('./ohs-services-grid.html')
        };
    }

};