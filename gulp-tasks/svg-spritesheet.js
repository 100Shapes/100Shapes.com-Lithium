var gulp = require("gulp");
var svgSprite = require('gulp-svg-sprite');

module.exports = function(callback) {

    svgconfig               = {
        shape               : {
            meta            : 'src/img/svgs/icons.yml'
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
    return gulp.src('*.svg', {cwd: 'src/img/svgs'})
        .pipe(svgSprite(svgconfig))
        .pipe(gulp.dest('src/img/svgs'));
       
};
