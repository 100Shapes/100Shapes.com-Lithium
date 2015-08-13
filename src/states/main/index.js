export default ngModule => {

    ngModule.config($stateProvider => {

        $stateProvider
            .state('main', {
                url: '',
                abstract: true,
                controller: 'MainCtrl as vm',
                template: require('./main.html')
            });

    });

    ///////

    ngModule.controller('MainCtrl', MainCtrl);

    function MainCtrl($window, $rootScope, Analytics, $location, $timeout, $localStorage) {

        let vm = this;

        vm.$storage = $localStorage.$default({
            analytics_tracking: true
        });

        $window.prerenderReady = true;

        // Initial run

        if (vm.$storage.analytics_tracking) {
            Analytics.createAnalyticsScriptTag();
            trackPage();
        }

        $rootScope.$on('$stateChangeSuccess', () => {
            if (vm.$storage.analytics_tracking) {
                trackPage();
            }
        });

        function trackPage() {
            $timeout(() => {
                Analytics.trackPage($location.url());
            });
        }
    }

}
