const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/react/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: [
                {
                  loader: 'babel-loader',
                  options: {
                    presets: ['env', 'stage-3', "react"]
                  }
                }
              ]
            },
            {
              test: /\.scss$/,
              use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader','sass-loader']
              })
            },
            {
              test: /\.html$/,
              use: ['html-loader']
            },
            {
              test: /\.jpg$/,
              use: "file-loader?name=[name].[ext]&outputPath=images/"
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('styles/index.css'),
        new HtmlWebpackPlugin({template: 'src/index.html'}),
        new CleanWebpackPlugin(['dist']), // to clean dist folder before every building
        new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify('production')}), // This tells the Webpack and Babel for optimization for performance
        new webpack.optimize.UglifyJsPlugin(), //To minify js
        new webpack.NoEmitOnErrorsPlugin(), // Makes sure Webpack will not compile if Errors
    ]
};
