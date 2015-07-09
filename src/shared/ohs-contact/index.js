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
            template: require('./ohs-contact.html'),
            link: function(scope) {
                scope.meta = COMPANY_META;
            }
        };
    }
};