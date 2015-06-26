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
        .config(function ($analyticsProvider) {
            $analyticsProvider.withBase(true);
        })

        ;
    
}
