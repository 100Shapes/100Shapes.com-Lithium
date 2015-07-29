export default ngModule => {

    const url = require('url');

    ngModule.factory('LandingContentService', LandingContentService)

    function LandingContentService($http, API_BASE_URL) {

        const API_LIST_URL = url.resolve(API_BASE_URL, 'landing-pages/');
        const CONTENT_TYPE = 'landing_pages.LandingPage';

        const landingContentService =  {

            one(landing_page_slug) {

                const LANDING_PAGE_URL = url.resolve(API_LIST_URL, `${landing_page_slug}/`);

                return $http.get(LANDING_PAGE_URL).then(
                    (response) => {
                        return response.data;
                    }
                );
            },
        };

        return landingContentService;
    }


}
