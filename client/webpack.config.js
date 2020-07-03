const path = require('path');
const SassPlugin = require('sass-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

// Object in which we can specify our setting or configuration
// Export object using node js syntax
module.exports = {
    // Entry point,Output,Loader,Plugins

    // . means current folder
    entry: ['babel-polyfill', './src/js/index.js'],

    // object
    output: {
        // Absolute path
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js',
    },
    // Production and Development Mode
    // Minifying code and Tree shaking
    // mode : 'development'
    devServer: {
        contentBase: './dist',
    },
    plugins: [
        new SassPlugin(
            { './src/sass/main.scss': './css/style.css' },
            {
                sourceMap: false,
                sass: { outputStyle: 'compressed' },
                autoprefixer: true,
            }
        ),
        new HtmlPlugin({
            filename: 'index.html',
            template: './src/index.html',
            links: [{ rel: 'stylesheet', type: 'text/css', href: './css/style.css' }],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
};
