export default ngModule => {

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
                            return ServiceContentService.one(slug).then((result) => {
                                if (!result) {
                                    // TODO: Redirect
                                }
                                return result;
                            });
                        },

                        more_services: function(ServiceContentService) {
                            const params = {
                                limit: 3,
                                random: true
                            };

                            return ServiceContentService.query(params);
                        }

                    }
                });

        });

    //////////////////

    ngModule.controller('ServicesItemCtrl', ServicesItemCtrl);

    function ServicesItemCtrl(service, more_services, COMPANY_META, GlobalMastheadService, GLOBAL_MASTHEAD_THEMES, $location) {
        let vm = this;

        vm.service = service;
        vm.company = COMPANY_META;
        vm.$location = $location;
        vm.more_services = more_services;

        GlobalMastheadService.theme = `${GLOBAL_MASTHEAD_THEMES.TRANSPARENT} ${GLOBAL_MASTHEAD_THEMES.BLUE}`;
    }

};
