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
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true, // webpack@1.x
                            disable: true, // webpack@2.x and newer
                        },
                    },
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
        ]
    }
};