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
                            return BlogContentService.slug(slug);
                        }

                    }
                });
            
        });

    //////////////////

    ngModule.controller('BlogPostCtrl', BlogPostCtrl);

    function BlogPostCtrl(post) {
        let vm = this;

        vm.post = post;
    }
    
}
