export default ngModule => {

    require('./landing.item.less');
    const angular = require('angular');

    ngModule
        .config($stateProvider => {

            $stateProvider
                .state('main.landing.item', {
                    url: '/:slug/',
                    template: require('./landing.item.html'),
                    controller: 'LandingPageCtrl as vm',
                    resolve: {

                        landing_page: function(LandingContentService, $stateParams) {
                            let slug = $stateParams.slug;
                            return LandingContentService.one(slug);
                        }

                    }
                });

        });

    //////////////////

    ngModule.controller('LandingPageCtrl', LandingPageCtrl);

    function LandingPageCtrl(landing_page) {
        let vm = this;

        vm.landing_page = landing_page;

    }

}
