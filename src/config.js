export default ngModule => {

    ngModule

        // Redirect to playlist.list
        .config(function($urlRouterProvider) {
            $urlRouterProvider.otherwise('/');
        })

        // Enable HTML5 mode
        .config(function($locationProvider) {
            $locationProvider.html5Mode(true);
        })

        // Use HTML5 pushstate (nice URLs)
        .config(function($locationProvider) {
            $locationProvider.hashPrefix('!');
        })

        // Analytics
        // Config options: https://github.com/revolunet/angular-google-analytics#example
        .config(function (AnalyticsProvider) {
            AnalyticsProvider.setAccount('UA-XXXXX-xx');

            // Real analytics code #5
            //AnalyticsProvider.setAccount('UA-27923958-13');
        })

        ;
    
}
