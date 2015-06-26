export default ngModule => {

    const url = require('url');

    ngModule.factory('BlogContentService', BlogContentService)

    function BlogContentService($http, API_BASE_URL) {

        const POSTS_LIST_URL = url.resolve(API_BASE_URL, 'pages/');

        const blogContentService =  {

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

            one(post_id) {

                const POSTS_DETAIL_URL = url.resolve(POSTS_LIST_URL, `${post_id}/`);

                return $http.get(POSTS_DETAIL_URL).then(
                    (response) => {
                        return response.data;
                    }
                );
            },

            slug(slug) {
                return $http.get(POSTS_LIST_URL,
                    {
                        params: {
                            type: 'blog.BlogPost',
                            slug: slug,
                            limit: 1
                        }
                    }
                ).then(
                    (response) => {
                        let post_id = response.data.pages[0].id;
                        return this.one(post_id);
                    }
                );

            }
        };

        return blogContentService;
    }

    
}
