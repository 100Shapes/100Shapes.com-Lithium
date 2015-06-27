module.exports = function(ngModule) {

    require('./ohs-off-canvas.less');

    ngModule
        .factory('OffCanvas', OffCanvas);

    function OffCanvas(cnOffCanvas) {

        const offCanvas = cnOffCanvas({
            controller: 'OffCanvasCtrl',
            controllerAs: 'vm',
            containerClass: 'ohs-off-canvas--open',
            template: require('./ohs-off-canvas.html')
        });

        return offCanvas;
    }

    /////////////

    ngModule.controller('OffCanvasCtrl', OffCanvasCtrl);

    function OffCanvasCtrl(OffCanvas) {
        let vm = this;

        vm.toggle = OffCanvas.toggle;

    }

};