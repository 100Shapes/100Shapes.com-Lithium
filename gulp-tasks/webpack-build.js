var gulp = require("gulp");
var webpackConfig = require('../webpack.config.js');
var webpack = require('webpack');
var gutil = require("gulp-util");

module.exports = function(callback) {
     
    // modify some webpack config options
    var myConfig = Object.create(webpackConfig);
    myConfig.plugins = myConfig.plugins.concat(
        new webpack.DefinePlugin({
            "process.env": {
                // This has effect on the react lib size
                "NODE_ENV": JSON.stringify("production")
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin()
    );

    // run webpack
    return webpack(myConfig, function(err, stats) {
        if(err) throw new gutil.PluginError('webpack-build', err);
        gutil.log("[webpack-build]", stats.toString({
            colors: true
        }));
        callback();
    });
    
};

