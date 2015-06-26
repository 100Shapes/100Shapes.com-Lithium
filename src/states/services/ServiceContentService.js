export default ngModule => {

    const url = require('url');
    const _ = require('lodash');

    ngModule.factory('ServiceContentService', ServiceContentService)

    function ServiceContentService($http, API_BASE_URL, AUTHORS) {

        const POSTS_LIST_URL = url.resolve(API_BASE_URL, 'pages/');
        const CONTENT_TYPE = 'services.Service';

        const serviceContentService =  {

            all() {

                return $http.get(POSTS_LIST_URL,
                    {
                        params: {
                            type: CONTENT_TYPE,
                            fields: [
                                'title',
                                'thumbnail_url',
                                'is_featured',
                                'slug'
                            ].join(',')
                        }
                    }
                ).then(
                    function (response) {
                        return response.data.pages;
                    }
                );

            },

            one(service_id) {

                const POSTS_DETAIL_URL = url.resolve(POSTS_LIST_URL, `${service_id}/`);

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
                            type: CONTENT_TYPE,
                            slug: slug,
                            limit: 1
                        }
                    }
                ).then(
                    (response) => {
                        let service_id = response.data.pages[0].id;
                        return this.one(service_id);
                    }
                );

            },


        };

        return serviceContentService;
    }

    
}
