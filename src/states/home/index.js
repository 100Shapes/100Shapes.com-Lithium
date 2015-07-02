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
                        }

                    }
                });
        });

    ////////////////

    ngModule
        .controller('HomeCtrl', HomeCtrl);
    
    function HomeCtrl(posts, services) {
        var vm = this;

        vm.posts = posts;
        vm.services = services;
    }

};