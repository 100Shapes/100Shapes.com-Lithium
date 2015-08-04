module.exports = function (ngModule) {

    require('./ohs-gallery-item-promo.less');

    /*******************
     *  <ohs-gallery-item-promo title="Run the Jewels"
     *                          background-image-url="http://api.100shapes.com/services/interactive-display-screens/case-study-london-live.png">
     *  </ohs-gallery-item-promo>
     */

    ngModule
        .directive('ohsGalleryItemPromo', ohsGalleryItemPromo);

    function ohsGalleryItemPromo() {
        return {
            restrict: 'E',
            scope: {
                title: '@',
                backgroundImageUrl: '@'
            },
            replace: true,
            template: require('./ohs-gallery-item-promo.html')
        };
    }

};