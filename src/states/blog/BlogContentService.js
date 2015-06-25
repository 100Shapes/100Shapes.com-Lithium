export default ngModule => {

    const url = require('url');

    ngModule.factory('BlogContentService', BlogContentService)

    function BlogContentService($http, API_BASE_URL) {

        const POSTS_LIST_URL = url.resolve(API_BASE_URL, 'pages/');

        return {

            all() {

                return $http.get(POSTS_LIST_URL,
                    {
                        params: {
                            type: 'blog.BlogPost',
                            fields: [
                                'title',
                                'thumbnail_url',
                                'slug',
                                'posted_at',
                                'post_category'
                            ].join(','),
                            order: 'posted_at'
                        }
                    }
                ).then(
                    function (response) {
                        return response.data.pages;
                    }
                );

            },

            one(slug) {

                return $http.get(POSTS_LIST_URL,
                    {
                        params: {
                            type: 'blog.BlogPost',
                            slug: slug,
                            limit: 1
                        }
                    }
                ).then(
                    function (response) {
                        let post_id = response.data.pages[0].id;
                        const POSTS_DETAIL_URL = url.resolve(POSTS_LIST_URL, `${post_id}/`);

                        return $http.get(POSTS_DETAIL_URL);
                    }
                ).then(
                    function (response) {
                        return response.data;
                    }
                );
            }

        };

    }

    
}
