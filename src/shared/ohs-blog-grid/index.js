module.exports = function(ngModule) {

    require('./ohs-blog-grid.less');

    ngModule
        .directive('ohsBlogGrid', ohsBlogGrid);

    function ohsBlogGrid() {
        return {
            restrict: 'E',
            scope: {
                posts: '=',
                filter: '='
            },
            replace: true,
            template: require('./ohs-blog-grid.html')
        };
    }

};