module.exports = function(ngModule) {

    require('./ohs-logo.less');

    ngModule
        .directive('ohsLogo', ohsLogo);

    function ohsLogo() {
        return {
            restrict: 'E',
            replace: true,
            template: require('./ohs-logo.html')
        };
    }

};