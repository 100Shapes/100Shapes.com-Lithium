module.exports = function(ngModule) {

    require('./ohs-contact.less');

    ngModule
        .directive('ohsContact', ohsContact);

    function ohsContact(COMPANY_META) {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                location: '@?'
            },
            controller: 'OhsContactCtrl as vm',
            bindToController: true,
            template: require('./ohs-contact.html'),
            link: function ($scope) {
                $scope.meta = COMPANY_META;
            }
        };
    }

    ngModule.controller('OhsContactCtrl', OhsContactCtrl);

    function OhsContactCtrl($location) {
        let vm = this;

        vm.$location = $location;
    }
};