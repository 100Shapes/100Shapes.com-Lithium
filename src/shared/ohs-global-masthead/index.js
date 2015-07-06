module.exports = function(ngModule) {

    require('./ohs-global-masthead.less');

    ngModule
        .directive('ohsGlobalMasthead', ohsGlobalMasthead);

    function ohsGlobalMasthead() {
        return {
            restrict: 'E',
            replace: true,
            scope: true,
            controller: 'OhsGlobalMastheadCtrl as vm',
            template: require('./ohs-global-masthead.html')
        };
    }

    ngModule.controller('OhsGlobalMastheadCtrl', OhsGlobalMastheadCtrl);

    function OhsGlobalMastheadCtrl(COMPANY_META, OffCanvas) {
        let vm = this;

        vm.company = COMPANY_META;
        vm.OffCanvas = OffCanvas;
    }
};