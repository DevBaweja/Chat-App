const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Object in which we can specify our setting or configuration
// Export object using node js syntax
module.exports = {
    // Entry point,Output,Loader,Plugins

    // . means current folder
    entry: ['babel-polyfill', './src/js/index.js', './src/sass/main.scss'],

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
        new MiniCssExtractPlugin({
            filename: 'css/style.css',
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [path.join(process.cwd(), 'node_modules')],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'resolve-url-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                            sourceMap: true,
                        },
                    },
                ],
            },
        ],
    },
};
