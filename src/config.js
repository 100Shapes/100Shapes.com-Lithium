export default ngModule => {

    ngModule

        // Redirect to playlist.list
        .config(function($urlRouterProvider) {
            $urlRouterProvider.otherwise('/blog/');
        })

        // Use HTML5 pushstate (nice URLs)
        .config(function($locationProvider) {
            $locationProvider.hashPrefix('!');
        })


        ;
    
}
