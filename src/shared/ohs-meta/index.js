module.exports = function(ngModule) {

    ngModule
        .directive('ohsMeta', ohsMeta);

    function ohsMeta() {
        return {
            restrict: 'E',
            scope: {
                name: '@?',
                property: '@?',
                content: '@'
            },
            replace: true,
            template: require('./ohs-meta.html')
        };
    }

    //////////////

    ngModule
        .directive('ohsMetaImg', ohsMetaImg);

    function ohsMetaImg() {
        return {
            restrict: 'E',
            scope: {
                name: '@',
                content: '@'
            },
            replace: true,
            template: require('./ohs-meta.html')
        };
    }

};