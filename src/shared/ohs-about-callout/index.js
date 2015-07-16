module.exports = function(ngModule) {

    ngModule
        .directive('ohsAboutCallout', ohsAboutCallout);

    function ohsAboutCallout() {
        return {
            restrict: 'E',
            replace: true,
            template: require('./ohs-about-callout.html')
        };
    }

};