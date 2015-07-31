export default ngModule => {

    const url = require('url');

    ngModule.factory('ApiBaseService', ApiBaseService);

    function ApiBaseService($http, API_BASE_URL) {

        function ApiBaseService(objectType) {
            this.objectType = objectType;
            this.LIST_URL = url.resolve(API_BASE_URL, `${objectType}`);
        }

        ApiBaseService.prototype.query = function (params) {

            return $http.get(this.LIST_URL, {
                params: params
            }).then(
                (response) => {
                    return response.data.items;
                }
            );
        };

        ApiBaseService.prototype.meta = function () {

            let params = {
                limit: 0
            };

            return $http.get(this.LIST_URL, {
                params: params
            }).then(
                (response) => {
                    return response.data.meta;
                }
            );
        };

        ApiBaseService.prototype.one = function (slug) {
            const DETAIL_URL = url.resolve(API_BASE_URL, `${this.objectType}/${slug}/`);

            return $http.get(DETAIL_URL).then(
                (response) => {
                    return response.data;
                }
            );
        };

        return ApiBaseService;
    }
}
