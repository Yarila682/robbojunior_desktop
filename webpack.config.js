
const path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: {
        app: './src/entry/app.js'
    },
    output: {
        //path: './src/build/bundles',
        path: path.resolve('src', 'build','bundles'),
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: /node_modules/,
                loaders: ['strip-sourcemap-loader']
            },
            {
                loader: 'babel-loader',
                exclude: /node_modules/,
                test: /\.jsx?$/,
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};
