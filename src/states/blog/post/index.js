export default ngModule => {

    require('./blog.post.less')

    ngModule
        .config($stateProvider => {

            $stateProvider
                .state('main.blog.post', {
                    url: '/:slug/',
                    template: require('./blog.post.html'),
                    controller: 'BlogPostCtrl as vm',
                    resolve: {

                        post: function(BlogContentService, $stateParams) {
                            let slug = $stateParams.slug;
                            return BlogContentService.one(slug);
                        }

                    }
                });
            
        });

    //////////////////

    ngModule.controller('BlogPostCtrl', BlogPostCtrl);

    function BlogPostCtrl(post, GlobalMastheadService, GLOBAL_MASTHEAD_THEMES) {
        let vm = this;

        vm.post = post;
        GlobalMastheadService.theme = `${GLOBAL_MASTHEAD_THEMES.ORANGE}`;
    }
    
}
