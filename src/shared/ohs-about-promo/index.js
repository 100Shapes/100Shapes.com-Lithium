module.exports = function(ngModule) {

    ngModule
        .directive('ohsAboutPromo', ohsAboutPromo);

    function ohsAboutPromo() {
        return {
            restrict: 'E',
            replace: true,
            template: require('./ohs-about-promo.html')
        };
    }

};