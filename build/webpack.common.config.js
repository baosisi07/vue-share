const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const OfflinePlugin = require('offline-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        // publicPath: 'http://www.cdn.com',
        filename: 'js/[name].[hash:8].js',
        path: path.resolve(__dirname, '../dist/')
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: true,
                            hmr: process.env.NODE_ENV === 'development',
                            reloadAll: true,
                        }
                    },
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 2222,
                        name: 'images/[name].[hash:8].[ext]'
                    }
                }
            },
            
            {
                test: /\.(ttf|eot|svg||woff|woff2)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: 'fonts/[name].[ext]'
                    }
                }
            }
        ]
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                styles: {
                    name: 'style',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true
                }
            }
        }
    },
    plugins: [new htmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash:5].css'
        }),
        new CleanWebpackPlugin(),
        new OfflinePlugin({
            ServiceWorker: {
                events: true
            }
        })
    ]
}