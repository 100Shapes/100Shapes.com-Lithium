module.exports = function(ngModule) {

    /*******************
    *
    *  <ohs-quote>
    *       Duis aute irure dolor in reprehenderit in vor incididunt. 
    *  </ohs-quote>
    *
    ********************/

    require('./ohs-quote.less');

    ngModule
        .directive('ohsQuote', ohsQuote);

    function ohsQuote() {

        return {
            restrict: 'E',
            transclude: true,
            scope: {
                name: '@?',
                role: '@?',
                icon: '@?',
                profile: '@?'
            },
            replace: true,
            template: require('./ohs-quote.html')
        };
    }
};