var gulp = require("gulp");
var path = require('path');
var webpackConfig = require('../webpack.config.js');

module.exports = function() {
    return gulp.src('src/static/**/*.*')
        .pipe(gulp.dest(path.join(webpackConfig.output.path, 'static')));
};