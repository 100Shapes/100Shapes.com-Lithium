export default ngModule => {

    const url = require('url');

    ngModule.factory('ServiceContentService', ServiceContentService);

    function ServiceContentService(ApiBaseService) {

        let serviceContentService = new ApiBaseService('services');

        return serviceContentService;
    }
}
