module.exports = function(ngModule) {

    ngModule
        .directive('ohsAboutCallout', ohsAboutCallout);

    function ohsAboutCallout() {
        return {
            restrict: 'E',
            replace: true,
            template: require('./ohs-about-callout.html'),
            controller: 'OhsAboutCalloutCtrl as vm',
            bindToController: true
        };
    }

    ngModule.controller('OhsAboutCalloutCtrl', OhsAboutCalloutCtrl);

    function OhsAboutCalloutCtrl($location) {
        let vm = this;

        vm.$location = $location;
    }

};