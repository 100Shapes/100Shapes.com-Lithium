module.exports = function(ngModule) {

    ngModule.factory('GlobalMastheadService', GlobalMastheadService);

    function GlobalMastheadService(GLOBAL_MASTHEAD_THEMES) {

        let theme = GLOBAL_MASTHEAD_THEMES.DEFAULT;
        let isOpen = false;

        let globalMastheadService = {

            theme,

            isOpen,

            toggleNav() {
                this.isOpen = !this.isOpen;
            },

            resetTheme() {
                this.theme = GLOBAL_MASTHEAD_THEMES.DEFAULT;
            }

        };

        return globalMastheadService;

    }

};