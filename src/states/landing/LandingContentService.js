export default ngModule => {

    const url = require('url');

    ngModule.factory('LandingContentService', LandingContentService)

    function LandingContentService($http, API_BASE_URL) {

        const API_LIST_URL = url.resolve(API_BASE_URL, 'pages/');
        const CONTENT_TYPE = 'landing_pages.LandingPage';

        const landingContentService =  {

            one(landing_page_id) {

                const LANDING_PAGE_URL = url.resolve(API_LIST_URL, `${landing_page_id}/`);

                return $http.get(LANDING_PAGE_URL).then(
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
                        let landing_page_id = response.data.pages[0].id;
                        return this.one(landing_page_id);
                    }
                );

            }

        };

        return landingContentService;
    }

    
}
