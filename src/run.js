const FastClick = require('fastclick');

export default ngModule => {

    ngModule

        // Run FastClick
        .run(function() {
            FastClick.attach(document.body);
        })

        // Add no-touch class
        .run(function() {
            if (!("ontouchstart" in document.documentElement)) {
                document.documentElement.className += " no-touch";
            }
        })

        // Set mobile-safari
        .run(function () {

            function isMobileSafari() {
                return navigator.userAgent.match(/(iPod|iPhone|iPad)/) && navigator.userAgent.match(/AppleWebKit/)
            }

            if (!isMobileSafari()) {
                document.documentElement.className += " no-mob-safari";
            }
        })

        .run(function(Analytics, uuid) {
            Analytics.set('&uid', uuid.v4());
        })

    ;

};
