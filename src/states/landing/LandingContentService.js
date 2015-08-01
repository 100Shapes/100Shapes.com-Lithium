export default ngModule => {

    ngModule.factory('LandingContentService', LandingContentService);

    function LandingContentService(ApiBaseService) {

        let landingContentService = new ApiBaseService('l');

        return landingContentService;
    }
}
