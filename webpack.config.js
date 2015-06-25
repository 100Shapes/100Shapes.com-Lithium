var path = require('path');
var webpack = require("webpack");
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    cache: true,

    context: path.join(__dirname, 'src'),
    entry: './main.js',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/',
        chunkFilename: "modules/[chunkhash].js"
    },

    module:  {
        loaders: [
            {test: /\.js$/,           loader: 'babel', exclude: /node_modules/},
            {test: /\.css$/,          loader: ExtractTextPlugin.extract('style-loader', 'css!autoprefixer-loader?browsers=last 2 version'), exclude: /node_modules/ },
            {test: /\.less$/,         loader: ExtractTextPlugin.extract('style-loader', 'css!autoprefixer-loader?browsers=last 2 version!less'), exclude: /node_modules/ },
            {test: /\.html$/,         loader: 'html?attrs=img:src source:src', exclude: /node_modules/},
            {test: /\.json$/,         loader: 'json', exclude: /node_modules/},
            {
                test: /\.(jpe?g|png|gif)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            },
            { test: /\.woff(2)?(-1enn7r)?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)?(-1enn7r)?(#iefix-1enn7r)?(-1enn7r#symphinity)$/, loader: "file-loader" }
        ],

        noParse: [
            path.join('node_modules', '/angular'),
            path.join('node_modules', '/lodash'),
            path.join('node_modules', '/angular-ui-router'),
            path.join('node_modules', '/Cardinal')
        ]
    },

    plugins: [
        new ExtractTextPlugin('main.css'),

        new ngAnnotatePlugin({
            add: true
        }),

        new HtmlWebpackPlugin({
            inject: true,
            template: "src/index.html",
            favicon: "src/img/favicon.ico"
        })

        // new webpack.optimize.UglifyJsPlugin({
        //   output: {
        //     comments: false
        //   }
        // })

        // new webpack.ProvidePlugin({
        //   $: 'jquery',
        //   jQuery: 'jquery',
        //   'window.jQuery': 'jquery',
        //   'root.jQuery': 'jquery'
        // })

    ],

    devtool: 'eval',

    devServer: {
        contentBase: "./src",
        host: "0.0.0.0"
    },

    externals: {
    },

    resolve: {
        alias: {
            'css': path.join(__dirname, 'src/css')
        }

    }
};