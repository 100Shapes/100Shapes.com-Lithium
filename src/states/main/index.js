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

    function MainCtrl($window, $rootScope, Analytics, $location, $timeout) {

        $window.prerenderReady = true;

        $timeout(() => {
            trackPage();
        });

        $rootScope.$on('$stateChangeSuccess', () => {
            trackPage();
        });

        function trackPage() {
            Analytics.trackPage($location.absUrl());
        }
    }

}
