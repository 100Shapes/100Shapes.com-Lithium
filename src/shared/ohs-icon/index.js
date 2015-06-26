module.exports = function(ngModule) {

    require('./ohs-icon.less');

    /************
    *
    *  <ohs-icon name="{{ icon-name }}"></ohs-icon>
    *
    ************/

    ngModule
        .directive('ohsIcon', ohsIcon);

    function ohsIcon() {
        return {
            restrict: 'E',
            scope: {
                name: '@'
            },
            replace: true,
            template: require('./ohs-icon.html')
        };
    }

    ////////////////////


    /************
    *
    *  {{ vm.name | iconName }} 
    *
    ************/

    ngModule
        .filter('iconName', iconName);

    function iconName($sce) {
        return function(name) {
            return $sce.trustAsResourceUrl('#' + name);
        };
    }
};