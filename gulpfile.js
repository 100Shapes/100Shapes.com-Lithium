var gulp = require("gulp");
var runSequence = require('run-sequence');
var path = require('path');

// Load all tasks from the gulp-tasks/
require('gulp-task-loader')('gulp-tasks');


gulp.task('default', function() {
    runSequence(
        ['clean-build'],
        ['statics', 'prep-index-html'],
        ['webpack-dev-server']
    );
});

gulp.task('build', function() {
    runSequence(
        ['clean-build'],
        ['statics', 'prep-index-html'],
        ['webpack-build']
    );
});
