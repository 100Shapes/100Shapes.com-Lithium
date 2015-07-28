export default ngModule => {

    const url = require('url');
    const _ = require('lodash');

    ngModule.factory('BlogContentService', BlogContentService)

    function BlogContentService($http, API_BASE_URL, AUTHORS) {

        const POSTS_LIST_URL = url.resolve(API_BASE_URL, 'blogs');

        const blogContentService =  {

            all() {

                return $http.get(POSTS_LIST_URL).then(
                    function (response) {
                        return response.data.blogs;
                    }
                );

            },

            one(slug) {

                const POSTS_DETAIL_URL = url.resolve(POSTS_LIST_URL, `${slug}`);

                return $http.get(POSTS_DETAIL_URL).then(
                    (response) => {
                        let post = response.data;
                        let author_slug = post.author;
                        post.author = this.find_author(author_slug);
                        return post;
                    }
                );
            },

            categories() {
                return {};
            },

            find_author(slug) {
                return AUTHORS[slug];
            },

            featured(QUANTITY = 4) {
                return $http.get(POSTS_LIST_URL, {
                    params: {
                        featured: true,
                        limit: QUANTITY
                    }
                }).then(
                    function (response) {
                        return response.data.blogs;
                    }
                );
            }
        };

        return blogContentService;
    }

    
}
