module.exports = function(ngModule) {

    ngModule.factory('GlobalMastheadService', GlobalMastheadService);

    function GlobalMastheadService(GLOBAL_MASTHEAD_THEMES) {

        let theme = GLOBAL_MASTHEAD_THEMES.DEFAULT;

        let globalMastheadService = {

            theme,

            resetTheme() {
                this.theme = GLOBAL_MASTHEAD_THEMES.DEFAULT;
            }

        };

        return globalMastheadService;

    }

};