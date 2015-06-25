export default ngModule => {

    require('./blog.post.less')

    ngModule
        .config($stateProvider => {

            $stateProvider
                .state('main.blog.post', {
                    url: '/:id/',
                    template: require('./blog.post.html'),
                    controller: 'BlogPostCtrl as vm',
                    resolve: {

                        post: function(BlogContentService, $stateParams) {
                            let post_id = $stateParams.id;
                            return BlogContentService.one(post_id);
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
