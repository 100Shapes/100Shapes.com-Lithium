var gulp = require("gulp");
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require("../webpack.config.js");
var webpack = require("webpack");
var gutil = require("gulp-util");
var path = require("path");

module.exports = function(callback) {

    // modify some webpack config options
    var myConfig = Object.create(webpackConfig);
    myConfig.debug = true;

    // Start a webpack-dev-server
    var server = new WebpackDevServer(webpack(myConfig), {
        publicPath: myConfig.output.publicPath,
        contentBase: myConfig.devServer.contentBase,
        host: myConfig.devServer.host,
        stats: {
            colors: true
        }
    });

    server.use('/', function(req, res) {
        res.sendFile(path.join(__dirname, '../src/index.html'));
    })

    server.listen(8081, "0.0.0.0", function(err) {
        if(err) throw new gutil.PluginError("webpack-dev-server", err);
        gutil.log("[webpack-dev-server]", "http://0.0.0.0:8081/webpack-dev-server/index.html");
    });

};