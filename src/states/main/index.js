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

        $timeout(function() {
            Analytics.trackPage($location.$$url);
        });

        $rootScope.$on('$stateChangeSuccess', function(){
            Analytics.trackPage($location.$$url);
        });
    }

}
