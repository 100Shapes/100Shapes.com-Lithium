var rimraf = require('rimraf');
var webpackConfig = require('../webpack.config.js');
var path = require('path');

module.exports = function(cb) {
    rimraf(path.join(webpackConfig.output.path, '**/*'), cb);
};
