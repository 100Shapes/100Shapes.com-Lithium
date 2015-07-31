module.exports = function(ngModule) {

    require('./home.less');

    /////////////
    
    ngModule
        .config(function($stateProvider) {
        
            $stateProvider
                .state('main.home', {
                    url: '/',
                    template: require('./home.html'),
                    controller: 'HomeCtrl as vm',
                    resolve: {

                        posts: function(BlogContentService) {

                            let queryParams = {
                                limit: 6,
                                random: true
                            };

                            return BlogContentService.query(queryParams);
                        },

                        services: function(ServiceContentService) {

                            let queryParams = {
                                limit: 3,
                                random: true
                            };

                            return ServiceContentService.query(queryParams);
                        }
                    }
                });
        });

    ////////////////

    ngModule
        .controller('HomeCtrl', HomeCtrl);
    
    function HomeCtrl(posts, services, ClimbFactory, CLIMB_FEED_ID, GlobalMastheadService, GLOBAL_MASTHEAD_THEMES, COMPANY_META) {
        var vm = this;

        vm.posts = posts;
        vm.services = services;
        vm.company = COMPANY_META;

        ClimbFactory.getFeed(CLIMB_FEED_ID).then(function(items) {
            vm.social = items.slice(0, 5);
        });

        GlobalMastheadService.theme = `${GLOBAL_MASTHEAD_THEMES.BLUE} ${GLOBAL_MASTHEAD_THEMES.TRANSPARENT}`;

    }

};