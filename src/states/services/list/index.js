export default ngModule => {

    require('./services.list.less')

    ngModule
        .config($stateProvider => {

            $stateProvider
                .state('main.services.list', {
                    url: '/',
                    template: require('./services.list.html'),
                    controller: 'ServiceListCtrl as vm',
                    resolve: {

                        services: function(ServiceContentService) {
                            return ServiceContentService.all();
                        }

                    }
                });
            
        });

    //////////////////

    ngModule.controller('ServiceListCtrl', ServiceListCtrl);

    function ServiceListCtrl(services) {
        let vm = this;

        vm.services = services;
    }
    
}
