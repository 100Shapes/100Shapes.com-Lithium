export default ngModule => {

    require('./services.item.less');
    const angular = require('angular');

    ngModule
        .config($stateProvider => {

            $stateProvider
                .state('main.services.item', {
                    url: '/:slug/',
                    template: require('./services.item.html'),
                    controller: 'ServicesItemCtrl as vm',
                    resolve: {

                        service: function(ServiceContentService, $stateParams) {
                            let slug = $stateParams.slug;
                            return ServiceContentService.one(slug);
                        }

                    }
                });

        });

    //////////////////

    ngModule.controller('ServicesItemCtrl', ServicesItemCtrl);

    function ServicesItemCtrl(service, COMPANY_META, GlobalMastheadService, GLOBAL_MASTHEAD_THEMES) {
        let vm = this;

        vm.service = service;
        vm.company = COMPANY_META;

        GlobalMastheadService.theme = `${GLOBAL_MASTHEAD_THEMES.TRANSPARENT} ${GLOBAL_MASTHEAD_THEMES.BLUE}`;
    }

};
