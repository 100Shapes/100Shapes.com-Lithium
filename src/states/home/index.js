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

                        posts: function() {
                            const NUM_OF_POSTS = 4;
                            return 2;
                        },

                        services: function() {
                            const NUM_OF_POSTS = 6;
                            return 2;
                        },

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