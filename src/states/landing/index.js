export default ngModule => {

    ngModule
        .config($stateProvider => {

            $stateProvider
                .state('main.landing', {
                    url: '/l',
                    abstract: true,
                    template: `<ui-view autoscroll></ui-view>`
                });
            
        });

    //////////////////


    require('./item')(ngModule);
    require('./LandingContentService')(ngModule);
    
}
