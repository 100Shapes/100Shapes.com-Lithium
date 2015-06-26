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
                        },

                        categories: function(BlogContentService) {
                            return BlogContentService.categories();
                        }

                    }
                });
            
        });

    //////////////////

    ngModule.controller('BlogListCtrl', BlogListCtrl);

    function BlogListCtrl(posts, categories) {
        let vm = this;

        vm.posts = posts;
        vm.categories = categories;
    }
    
}
