const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// 使用 extract text webpack plugin

const ExtractMainCss = new ExtractTextPlugin({ filename: 'main.css' })
module.exports = {
    devServer: {
        historyApiFallback: true,
        hot: true
    },
    

    devtool: 'eval-source-map',
    entry: [
        'babel-polyfill', // Load this first
        'whatwg-fetch',
        'react-hot-loader/patch', // This package already requires/loads react (but not react-dom). It must be loaded after babel-polyfill to ensure both react and react-dom use the same Symbol.
        'react', // Include this to enforce order
        'react-dom', // Include this to enforce order
        './src/index.js' // Path to your app's entry file
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'

        // publicPath: '/'
        //to production 
        // publicPath:'/Security/' 

    },
    module: {
        rules: [{
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react', 'stage-2']
                }
            }, {
                test: /\.css$/,
                use: ExtractMainCss.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'resolve-url-loader']
                })
            }, {
                test: /\.(ttf|eot|otf|woff|woff2)$/,
                loader: 'url-loader?limit=5000',
                options: {
                    name: '[name].[ext]',
                    outputPath: '/assets/fonts/'
                }
            }, {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader?limit=100000',
                    options: {
                        name: '[name].[ext]',
                        outputPath: '/assets/images/'
                    }
                }]
            },

            // {     test: /\.(png|jpg|gif)$/,     loader: 'url-loader?limit=100000',
            // options: {         name: '[name].[ext]',         outputPath:
            // '/assets/images/'     } },
            {
                test: /\.svg$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: '/assets/svg/'
                }
            }, {
                test: /\.scss$/,
                use: ExtractMainCss.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    plugins: [ExtractMainCss]
};