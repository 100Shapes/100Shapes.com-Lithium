export default ngModule => {

    ngModule
        .config($stateProvider => {

            $stateProvider
                .state('main.services', {
                    url: '/services',
                    abstract: true,
                    template: `<ui-view autoscroll></ui-view>`
                });
            
        });

    //////////////////


    require('./list')(ngModule);
    require('./item')(ngModule);
    require('./ServiceContentService')(ngModule);
    
}
