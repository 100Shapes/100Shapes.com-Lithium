export default ngModule => {

    ngModule
        .config($stateProvider => {

            $stateProvider
                .state('main.services', {
                    url: '/services',
                    abstract: true,
                    template: `<ui-view></ui-view>`
                });
            
        });

    //////////////////


    require('./list')(ngModule);
    require('./item')(ngModule);
    require('./ServiceContentService')(ngModule);
    
}
