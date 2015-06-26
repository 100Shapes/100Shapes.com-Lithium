export default ngModule => {

    const url = require('url');
    const _ = require('lodash');

    ngModule.factory('BlogContentService', BlogContentService)

    function BlogContentService($http, API_BASE_URL, AUTHORS) {

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
                                'posted_at'
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
                        let post = response.data;
                        let author_email = post.author;
                        post.author = this.find_author(author_email);
                        return post;
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

            },

            categories() {

                return $http.get(POSTS_LIST_URL,
                    {
                        params: {
                            type: 'blog.BlogCategory',
                            fields: [
                                'title',
                                'description'
                            ].join(','),
                            order: 'title'
                        }
                    }
                ).then(
                    function (response) {
                        return response.data.pages;
                    }
                );
            },

            find_author(email) {
                return _.find(AUTHORS, { email:email });
            }
        };

        return blogContentService;
    }

    
}
