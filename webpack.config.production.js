/* global __dirname, require, module*/
const webpack = require('webpack');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const path = require('path');

let libraryName = 'blockchain';

let nodeEnv = process.env.NODE_ENV || 'development';

let plugins = [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(nodeEnv)
    })
];

let outputFile, entry;

if (nodeEnv === 'production') {
    plugins.push(new UglifyJsPlugin({
        minimize: true,
        sourceMap: true
    }));
    outputFile = libraryName + '.min.js';
    entry = `${__dirname}/src/index.js`;
} else {
    outputFile = 'demo.js';
    entry = `${__dirname}/src/demo.js`;
}


const config = {
    target: 'node',
    entry,
    devtool: 'source-map',
    output: {
        path: __dirname + '/dist',
        filename: outputFile,
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    resolve: {
        modules: [path.resolve('./src')],
        extensions: ['.js']
    },
    plugins
};

module.exports = config;