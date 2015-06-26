module.exports = function(ngModule) {

    ngModule
        .directive('ohsContentRenderer', ohsContentRenderer);

    function ohsContentRenderer($compile) {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                content: '@',
            },
            link: function ($scope, elem) {

                elem.html($scope.content);
                $compile(elem.contents())($scope);

            }
        };
    }
};