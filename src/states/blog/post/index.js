export default ngModule => {

    require('./blog.post.less');

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
                        },

                        more_posts: function(BlogContentService, post) {
                            const params = {
                                limit: 3,
                                random: true
                            };

                            return BlogContentService.query(params);
                        }

                    }
                });
            
        });

    //////////////////

    ngModule.controller('BlogPostCtrl', BlogPostCtrl);

    function BlogPostCtrl(post, more_posts, GlobalMastheadService, GLOBAL_MASTHEAD_THEMES) {
        let vm = this;

        vm.post = post;
        vm.more_posts = more_posts;
        GlobalMastheadService.theme = `${GLOBAL_MASTHEAD_THEMES.ORANGE}`;
    }
    
}
