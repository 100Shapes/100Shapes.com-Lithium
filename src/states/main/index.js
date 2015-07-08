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

    function MainCtrl($scope, $window) {
        let vm = this;

        $window.prerenderReady = true;

    }

}
