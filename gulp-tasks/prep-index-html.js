var gulp = require('gulp');
var inject = require('gulp-inject');


module.exports = function() {

    var spritesheetFile = 'src/img/sprite.symbol.inline.svg';

    // SVG spritesheet
    return gulp.src('./src/index.html')
        .pipe(inject(gulp.src([spritesheetFile]), {
            starttag: '<!-- inject:build:svg -->',
            transform: function (filePath, file) {
                // return file contents as string 
                return file.contents.toString('utf8');
            }
        }))
        .pipe(gulp.dest('./src'));
};

module.exports.dependencies = ['svg-spritesheet'];
