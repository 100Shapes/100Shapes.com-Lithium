export default ngModule => {

    ngModule

        // Redirect to playlist.list
        .config(function($urlRouterProvider) {

            $urlRouterProvider.rule(function($injector, $location) {

                let path = $location.url();

                if (path[path.length - 1] === '/' || path.indexOf('/?') > -1) {
                    return;
                }

                if (path.indexOf('?') > -1) {
                    return path.replace('?', '/?');
                }

                let newPath = path + '/';

                return newPath;

            });

            $urlRouterProvider.otherwise(function ($injector, $location) {
                $injector.invoke(['$state', function ($state) { $state.go('404'); }]);
                return true;
            });
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
            AnalyticsProvider.useEnhancedLinkAttribution(true);
            AnalyticsProvider.ignoreFirstPageLoad(false);
            AnalyticsProvider.trackPages(false);
            AnalyticsProvider.delayScriptTag(true);
        })

   ;
}
