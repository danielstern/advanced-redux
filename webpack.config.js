const webpack = require('webpack');
const path = require('path');
module.exports = {
    module: {
        loaders: [
            {
                loader: "babel-loader",
                exclude: [
                    /(node_modules)/,
                ],
                query: {
                    presets: ['es2015','react'],
                    plugins: ['transform-object-rest-spread']
                }
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    entry: {
        "index": [
            'babel-regenerator-runtime',
            'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true',
            './src/main'
        ]
    },
    output: {
        path: path.resolve(__dirname, "public"),
        publicPath: "/assets",
        filename: "[name].bundle.js"
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    devServer: { inline: true },
    devtool: 'source-map'
};