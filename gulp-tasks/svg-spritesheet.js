var gulp = require("gulp");
var svgSprite = require('gulp-svg-sprite');

module.exports = function(callback) {

    svgconfig               = {
        shape               : {
            meta            : 'src/img/icons/icons.yml'
        },
        mode                : {
            symbol          : {
                dest        : '../',
                sprite      : 'sprite.symbol.inline.svg',
                inline      : true
            }
        }
    };

    // compiled the .svgs
    return gulp.src('*.svg', {cwd: 'src/img/icons'})
        .pipe(svgSprite(svgconfig))
        .pipe(gulp.dest('src/img/icons'));
       
};
