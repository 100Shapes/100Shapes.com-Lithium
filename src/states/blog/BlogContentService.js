export default ngModule => {

    const url = require('url');
    const _ = require('lodash');

    ngModule.factory('BlogContentService', BlogContentService)

    function BlogContentService($http, API_BASE_URL, AUTHORS) {

        const POSTS_LIST_URL = url.resolve(API_BASE_URL, 'blog');

        const blogContentService =  {

            all() {

                return $http.get(POSTS_LIST_URL).then(
                    (response) => {
                        return response.data.items;
                    }
                );

            },

            meta() {

                return $http.get(POSTS_LIST_URL).then(
                    (response) => {
                        return response.data.meta;
                    }
                );

            },

            one(slug) {

                const POSTS_DETAIL_URL = url.resolve(API_BASE_URL, `blog/${slug}/`);

                return $http.get(POSTS_DETAIL_URL).then(
                    (response) => {
                        let post = response.data;
                        let author_slug = post.author;
                        post.author = this.find_author(author_slug);
                        return post;
                    }
                );
            },

            find_author(slug) {
                return AUTHORS[slug];
            },

            quantity(QUANTITY = 4) {
                return $http.get(POSTS_LIST_URL, {
                    params: {
                        limit: QUANTITY
                    }
                }).then(
                    (response) => {
                        if (QUANTITY === 1) {
                            return response.data.items[0];
                        }
                        return response.data.items;
                    }
                );
            }
        };

        return blogContentService;
    }


}
