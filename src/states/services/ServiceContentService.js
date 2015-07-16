export default ngModule => {

    const url = require('url');
    const _ = require('lodash');

    ngModule.factory('ServiceContentService', ServiceContentService)

    function ServiceContentService($http, API_BASE_URL, AUTHORS) {

        const API_LIST_URL = url.resolve(API_BASE_URL, 'pages/');
        const CONTENT_TYPE = 'services.Service';

        const serviceContentService =  {

            all() {

                return $http.get(API_LIST_URL,
                    {
                        params: {
                            type: CONTENT_TYPE,
                            fields: [
                                'title',
                                'thumbnail_url',
                                'lead',
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

                const POSTS_DETAIL_URL = url.resolve(API_LIST_URL, `${service_id}/`);

                return $http.get(POSTS_DETAIL_URL).then(
                    (response) => {
                        return response.data;
                    }
                );
            },

            slug(slug) {

                return $http.get(API_LIST_URL,
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

            featured(quantity = 6) {

                return $http.get(API_LIST_URL,
                    {
                        params: {
                            type: CONTENT_TYPE,
                            limit: quantity,
                            fields: [
                                'title',
                                'thumbnail_url',
                                'lead',
                                'slug'
                            ].join(','),
                            is_featured: true
                        }
                    }
                ).then(
                    function (response) {
                        if (quantity === 1) {
                            return response.data.pages[0];
                        }
                        return response.data.pages;
                    }
                );
            }


        };

        return serviceContentService;
    }

    
}
