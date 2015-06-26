module.exports = function(ngModule) {

    require('./about.less');

    ngModule.config(function($stateProvider) {
        
        $stateProvider
            
            .state('main.about', {
                url: '/about/',
                template: require('./about.html')
            });
    });
};