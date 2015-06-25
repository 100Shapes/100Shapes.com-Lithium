export default ngModule => {

    const url = require('url');

    ngModule.factory('BlogContentService', BlogContentService)

    function BlogContentService($http, API_BASE_URL) {

        return {

            all() {

                const POSTS_LIST_URL = url.resolve(API_BASE_URL, 'pages/');

                return $http.get(POSTS_LIST_URL,
                    {
                        params: {
                            type: 'blog.BlogPost',
                            fields: [
                                'title',
                                'thumbnail_url',
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

            one(id) {

                const POSTS_ITEM_URL = url.resolve(API_BASE_URL, `pages/${id}/`);

                return $http.get(POSTS_ITEM_URL).then(
                    function (response) {
                        return response.data;
                    }
                );
            }

        };

    }

    
}
