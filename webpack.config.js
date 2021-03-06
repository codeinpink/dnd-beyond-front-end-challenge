const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/env']
            }
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                'file-loader'
            ]
        }, {
            test: /\.scss$/,
            loaders: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },

    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]
};