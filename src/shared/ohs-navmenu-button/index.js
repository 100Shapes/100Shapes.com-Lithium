export default ngModule => {

    require('./ohs-navmenu-button.less');

    ngModule.directive('ohsNavmenuButton', ohsNavmenuButton);

    function ohsNavmenuButton(OffCanvas) {
        return {
            restrict: 'E',
            scope: {
                shouldHide: '&?'
            },
            replace: true,
            template: require('./ohs-navmenu-button.html'),
            link: function($scope, elem, attrs) {
                $scope.OffCanvas = OffCanvas;

                if (!attrs['should-hide']) {
                    $scope.shouldHide = false;
                }
            }
        };
    }

};