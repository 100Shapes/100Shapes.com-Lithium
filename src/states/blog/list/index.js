export default ngModule => {

    require('./blog.list.less')

    ngModule
        .config($stateProvider => {

            $stateProvider
                .state('main.blog.list', {
                    url: '/',
                    template: require('./blog.list.html'),
                    controller: 'BlogListCtrl as vm',
                    resolve: {

                        posts: function(BlogContentService) {
                            return BlogContentService.all();
                        }

                    }
                });
            
        });

    //////////////////

    ngModule.controller('BlogListCtrl', BlogListCtrl);

    function BlogListCtrl(posts) {
        let vm = this;

        vm.posts = posts;
    }
    
}
