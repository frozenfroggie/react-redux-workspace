const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/js/index.js',
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
              use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
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
        new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify('development')}),
        new HtmlWebpackPlugin({template: 'src/index.html'}),
        new BrowserSyncPlugin({
          host: 'localhost',
          port: 3000,
          proxy: 'http://localhost:8080/'
       },
       {
         reload: false
       })
    ]
};
