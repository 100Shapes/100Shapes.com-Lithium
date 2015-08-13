module.exports = function(ngModule) {

    require('./ohs-video-embed.less');

    ngModule
        .directive('ohsVideoEmbed', ohsVideoEmbed);

    function ohsVideoEmbed() {
        return {
            restrict: 'E',
            transclude: true,
            replace: true,
            template: require('./ohs-video-embed.html')
        };
    }

};