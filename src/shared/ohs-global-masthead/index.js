module.exports = function(ngModule) {

    require('./ohs-global-masthead.less');
    require('./GlobalMastheadService')(ngModule);

    ngModule
        .directive('ohsGlobalMasthead', ohsGlobalMasthead);

    function ohsGlobalMasthead() {
        return {
            restrict: 'E',
            replace: true,
            controller: 'OhsGlobalMastheadCtrl as vm',
            template: require('./ohs-global-masthead.html')
        };
    }

    ngModule.controller('OhsGlobalMastheadCtrl', OhsGlobalMastheadCtrl);

    function OhsGlobalMastheadCtrl(COMPANY_META, GlobalMastheadService, $rootScope, GLOBAL_MASTHEAD_THEMES) {
        let vm = this;

        vm.company = COMPANY_META;
        vm.GlobalMastheadService = GlobalMastheadService;
        vm.themes = GLOBAL_MASTHEAD_THEMES;

        $rootScope.$on('$stateChangeSuccess', () => {
            if (GlobalMastheadService.isOpen === true) {
                GlobalMastheadService.toggleNav();
            }
        });
    }

};