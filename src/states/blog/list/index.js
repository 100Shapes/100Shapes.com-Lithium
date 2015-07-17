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
                        },

                        featuredPost: function(BlogContentService) {
                            return BlogContentService.featured(1);
                        }

                    }
                });
            
        });

    //////////////////

    ngModule.controller('BlogListCtrl', BlogListCtrl);

    function BlogListCtrl(posts, categories, featuredPost, GlobalMastheadService, GLOBAL_MASTHEAD_THEMES) {
        let vm = this;

        vm.posts = posts;
        vm.categories = categories;
        vm.featured_post = featuredPost;
        GlobalMastheadService.theme = GLOBAL_MASTHEAD_THEMES.ORANGE;

        vm.filter = {};

        vm.setCategoryFilter = function(categoryId) {
            vm.filter = { 'category': categoryId };
        }

        vm.clearFilter = function() {
            vm.filter = {};
        }
    }
    
}
