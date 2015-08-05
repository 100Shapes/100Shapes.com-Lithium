export default ngModule => {

    ngModule
        .config($stateProvider => {

            $stateProvider
                .state('main.blog.list', {
                    url: '/?category',
                    template: require('./blog.list.html'),
                    controller: 'BlogListCtrl as vm',
                    resolve: {

                        posts: function(BlogContentService) {
                            return BlogContentService.query();
                        },

                        categories: function(BlogContentService) {
                            return BlogContentService.meta().then(function(response) {
                                return response.categories;
                            });
                        }
                    }
                });

        });

    //////////////////

    ngModule.controller('BlogListCtrl', BlogListCtrl);

    function BlogListCtrl(posts, categories, GlobalMastheadService, GLOBAL_MASTHEAD_THEMES, $stateParams) {
        let vm = this;

        vm.posts = posts;
        vm.categories = categories;
        GlobalMastheadService.theme = GLOBAL_MASTHEAD_THEMES.ORANGE;

        vm.filter = {};

        vm.setCategoryFilter = function(categoryId) {
            vm.filter = {
                'category': categoryId
            };
            $stateParams.category = categoryId;
        };

        vm.clearFilter = function() {
            vm.filter = {};
            $stateParams.category = null;
        }
    }

}
