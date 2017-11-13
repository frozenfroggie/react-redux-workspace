const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
              use: ['style-loader', 'css-loader','sass-loader']
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
        new HtmlWebpackPlugin({template: 'src/index.html'})
    ]
};
