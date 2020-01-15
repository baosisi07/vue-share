const commonConfig = require('./webpack.common.config')
const merge = require('webpack-merge')
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const prodConfig = {
    mode: "production",
    devtool: 'cheap-module-source-map',

    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    }
}
module.exports = merge(commonConfig, prodConfig)