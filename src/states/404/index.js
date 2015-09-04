export default ngModule => {

    ngModule.config($stateProvider => {

        $stateProvider
            .state('404', {
                url: '/404/',
                template: require('./404.html')
            });

    });


}
