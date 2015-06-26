module.exports = function(ngModule) {

    ngModule
        .directive('ohsContentRenderer', ohsContentRenderer);

    function ohsContentRenderer($compile) {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                content: '=',
            },
            link: function ($scope, elem) {

                let e = $compile($scope.content)($scope);
                elem.replaceWith(e);

            }
        };
    }
};