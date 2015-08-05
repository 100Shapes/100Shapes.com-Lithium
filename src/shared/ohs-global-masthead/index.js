module.exports = function(ngModule) {

    require('./ohs-global-masthead.less');
    require('./GlobalMastheadService')(ngModule);
    const angular = require('angular');
    const ESCAPE_KEY = 27;

    ngModule
        .directive('ohsGlobalMasthead', ohsGlobalMasthead);

    function ohsGlobalMasthead(GlobalMastheadService, $document, $log) {
        return {
            restrict: 'E',
            replace: true,
            controller: 'OhsGlobalMastheadCtrl as vm',
            template: require('./ohs-global-masthead.html'),
            link ($scope) {
                $document.on('keyup', (event) => {
                    if (event.keyCode === ESCAPE_KEY) {
                        $scope.$apply(() => {
                            GlobalMastheadService.closeNav();
                        });
                    }
                });
            }
        };
    }

    ngModule.controller('OhsGlobalMastheadCtrl', OhsGlobalMastheadCtrl);

    function OhsGlobalMastheadCtrl(COMPANY_META, GlobalMastheadService, $rootScope, GLOBAL_MASTHEAD_THEMES, $state, $location) {
        let vm = this;

        vm.company = COMPANY_META;
        vm.GlobalMastheadService = GlobalMastheadService;
        vm.themes = GLOBAL_MASTHEAD_THEMES;

        vm.$state = $state;
        vm.$location = $location;

        $rootScope.$on('$stateChangeSuccess', () => {
            GlobalMastheadService.closeNav();
        });
    }

};