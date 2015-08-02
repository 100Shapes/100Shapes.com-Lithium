export default ngModule => {

    require('./ohs-navmenu-button.less');

    ngModule.directive('ohsNavmenuButton', ohsNavmenuButton);

    function ohsNavmenuButton(GlobalMastheadService) {
        return {
            restrict: 'E',
            scope: true,
            replace: true,
            template: require('./ohs-navmenu-button.html'),
            link: function($scope, elem, attrs) {
                $scope.GlobalMastheadService = GlobalMastheadService;
            }
        };
    }

};