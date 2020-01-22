const webpack = require('webpack');
const commonConfig = require('./webpack.common.config')
const merge = require('webpack-merge')

const devConfig = {
    mode: "development",
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: './dist',
        // https: true,
        open: true,
        port: 3000,
        hot: true
    },
    optimization: {
        usedExports: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}

module.exports = merge(commonConfig, devConfig)