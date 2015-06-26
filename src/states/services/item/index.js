export default ngModule => {

    require('./services.item.less')

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
                            return ServiceContentService.slug(slug);
                        }

                    }
                });
            
        });

    //////////////////

    ngModule.controller('ServicesItemCtrl', ServicesItemCtrl);

    function ServicesItemCtrl(service, COMPANY_META) {
        let vm = this;

        vm.service = service;
        vm.company = COMPANY_META;
    }
    
}
