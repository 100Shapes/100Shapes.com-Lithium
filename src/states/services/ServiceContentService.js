export default ngModule => {

    const url = require('url');
    const _ = require('lodash');

    ngModule.factory('ServiceContentService', ServiceContentService)

    function ServiceContentService($http, API_BASE_URL) {

        const API_LIST_URL = url.resolve(API_BASE_URL, 'services');

        const serviceContentService =  {

            all() {

                return $http.get(API_LIST_URL).then(
                    (response) => {
                        return response.data.items;
                    }
                );

            },

            one(slug) {

                const POSTS_DETAIL_URL = url.resolve(API_LIST_URL, `/services/${slug}/`);

                return $http.get(POSTS_DETAIL_URL).then(
                    (response) => {
                        return response.data;
                    }
                );
            },


            featured(QUANTITY = 6) {

                return $http.get(API_LIST_URL,
                    {
                        params: {
                            featured: true,
                            limit: QUANTITY
                        }
                    }
                ).then(
                    (response) => {
                        if (QUANTITY === 1) {
                            return response.data.items[0];
                        }
                        return response.data.items;
                    }
                );
            }


        };

        return serviceContentService;
    }


}
