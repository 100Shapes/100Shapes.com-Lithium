module.exports = function(ngModule) {

    require('./home.less');

    var _ = require('lodash');

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
                            return BlogContentService.featured();
                        },

                        services: function(ServiceContentService) {
                            return ServiceContentService.featured();
                        },

                        social: function(ClimbFactory, CLIMB_FEED_ID) {
                            return ClimbFactory.getFeed(CLIMB_FEED_ID).then(function(items) {
                                return items.slice(0, 5);
                            });
                        }

                    }
                });
        });

    ////////////////

    ngModule
        .controller('HomeCtrl', HomeCtrl);
    
    function HomeCtrl(posts, services, social, GlobalMastheadService, GLOBAL_MASTHEAD_THEMES, COMPANY_META) {
        var vm = this;

        vm.posts = posts;
        vm.services = services;
        vm.social = social;
        vm.company = COMPANY_META;

        GlobalMastheadService.theme = `${GLOBAL_MASTHEAD_THEMES.BLUE} ${GLOBAL_MASTHEAD_THEMES.TRANSPARENT}`;

    }

};