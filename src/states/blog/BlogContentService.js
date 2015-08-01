export default ngModule => {

    ngModule.factory('BlogContentService', BlogContentService);

    function BlogContentService(ApiBaseService, AUTHORS) {

        let blogContentService = new ApiBaseService('blog');

        blogContentService.one = function (slug) {

            const baseClass = Object.getPrototypeOf(this);

            return baseClass.one.call(this, slug).then(
                (post) => {
                    let author_slug = post.author;
                    post.author = AUTHORS[author_slug];
                    return post;
                }
            );
        };

        return blogContentService;
    }
}
