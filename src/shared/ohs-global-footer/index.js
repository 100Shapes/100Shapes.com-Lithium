module.exports = function(ngModule) {

    require('./ohs-global-footer.less');

    ngModule
        .directive('ohsGlobalFooter', ohsGlobalFooter);

    function ohsGlobalFooter() {
        return {
            restrict: 'E',
            scope: true,
            replace: true,
            template: require('./ohs-global-footer.html'),
            controller: 'GlobalFooterCtrl as vm',
            bindToController: true
        };
    }

    ////////////

    ngModule
        .controller('GlobalFooterCtrl', GlobalFooterCtrl);

    function GlobalFooterCtrl(COMPANY_META) {
        let vm = this;

        vm.today = new Date();
        vm.social = COMPANY_META.social;
    }
};