export default ngModule => {

    ngModule

        // Redirect to playlist.list
        .config(function($urlRouterProvider) {
            $urlRouterProvider.otherwise('/');
        })

        // Use HTML5 pushstate (nice URLs)
        .config(function($locationProvider) {
            $locationProvider.hashPrefix('!');
        })

        // Analytics
        // Config options: https://github.com/revolunet/angular-google-analytics#example
        .config(function (AnalyticsProvider) {
            AnalyticsProvider.setAccount('UA-XXXXX-xx');
        })

        ;
    
}
