export default ngModule => {

    ngModule.factory('BlogContentService', BlogContentService);

    function BlogContentService(ApiBaseService) {

        let blogContentService = new ApiBaseService('blog');

        return blogContentService;
    }
}
