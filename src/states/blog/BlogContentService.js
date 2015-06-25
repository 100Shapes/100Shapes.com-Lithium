export default ngModule => {


    ngModule.factory('BlogContentService', BlogContentService)

    function BlogContentService($http, API_BASE_URL) {

        return {

            all() {
                return 2;
            }

        };

    }

    
}
