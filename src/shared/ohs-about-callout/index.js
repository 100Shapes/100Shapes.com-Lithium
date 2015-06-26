module.exports = function(ngModule) {

    require('./ohs-about-callout.less');

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