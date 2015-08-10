export default ngModule => {

    ngModule

        // Redirect to playlist.list
        .config(function($urlRouterProvider) {
            $urlRouterProvider.otherwise('/');
        })

        // Enable HTML5 mode
        .config(function ($locationProvider, $provide) {

            $locationProvider
                .html5Mode(true)
                .hashPrefix('!');
        })

        // Analytics
        // Config options: https://github.com/revolunet/angular-google-analytics#example
        .config(function (AnalyticsProvider, uuidProvider) {
            AnalyticsProvider.setAccount('UA-27923958-13');
            AnalyticsProvider.useAnalytics(true);
            AnalyticsProvider.setPageEvent('$stateChangeSuccess');
            AnalyticsProvider.useEnhancedLinkAttribution(true);
        })

   ;
}
