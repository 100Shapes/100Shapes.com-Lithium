module.exports = function(ngModule) {

    require('./ohs-off-canvas.less');
    const angular = require('angular');

    ngModule
        .factory('OffCanvas', OffCanvas);

    function OffCanvas(cnOffCanvas, $document) {

        const nav = angular.element($document[0].querySelector('.ohs-global-masthead__off-canvas'));

        const offCanvas = cnOffCanvas({
            controller: 'OffCanvasCtrl',
            controllerAs: 'vm',
            container: nav,
            containerClass: 'ohs-off-canvas--open',
            template: require('./ohs-off-canvas.html')
        });

        return offCanvas;
    }

    /////////////

    ngModule.controller('OffCanvasCtrl', OffCanvasCtrl);

    function OffCanvasCtrl(OffCanvas, $rootScope) {
        let vm = this;

        vm.toggle = OffCanvas.toggle;

        $rootScope.$on('$stateChangeStart', () => {
            if (OffCanvas.isOpened === true) {
                OffCanvas.toggle();
            }
        });
    }

};