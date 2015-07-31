export default ngModule => {

    ngModule.factory('ServiceContentService', ServiceContentService);

    function ServiceContentService(ApiBaseService) {

        let serviceContentService = new ApiBaseService('services');

        return serviceContentService;
    }
}
