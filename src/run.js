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

    ;

}

