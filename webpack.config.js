const HTMLPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['@babel/polyfill',
        './14homework/src/js/index.js'
    ],
    output: {
        path: __dirname + '/14homework/dist',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: __dirname + '/14homework/dist'
    },
    plugins: [
        new HTMLPlugin({
            filename: "index.html",
            template: "./14homework/src/index.html"
        })
    ],
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
        ]
    }
};