export default ngModule => {

    require('./ohs-navmenu-button.less');

    ngModule.directive('ohsNavmenuButton', ohsNavmenuButton);

    function ohsNavmenuButton(OffCanvas) {
        return {
            restrict: 'E',
            replace: true,
            template: require('./ohs-navmenu-button.html'),
            link: function($scope, elem, attrs) {
                $scope.OffCanvas = OffCanvas;
            }
        };
    }

};