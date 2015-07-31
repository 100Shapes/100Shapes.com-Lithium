export default ngModule => {

    require('./services.list.less');

    ngModule
        .config($stateProvider => {

            $stateProvider
                .state('main.services.list', {
                    url: '/',
                    template: require('./services.list.html'),
                    controller: 'ServiceListCtrl as vm',
                    resolve: {

                        services: function(ServiceContentService) {
                            return ServiceContentService.query();
                        }

                    }
                });
            
        });

    //////////////////

    ngModule.controller('ServiceListCtrl', ServiceListCtrl);

    function ServiceListCtrl(services, GlobalMastheadService, GLOBAL_MASTHEAD_THEMES) {
        let vm = this;

        vm.services = services;
        GlobalMastheadService.theme = GLOBAL_MASTHEAD_THEMES.BLUE;

    }
    
}
