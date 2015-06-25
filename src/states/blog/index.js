export default ngModule => {

    ngModule
        .config($stateProvider => {

            $stateProvider
                .state('main.blog', {
                    url: '/blog',
                    abstract: true,
                    template: `<ui-view></ui-view>`
                });
            
        });

    //////////////////


    require('./list')(ngModule);
    require('./BlogContentService')(ngModule);
    
}
