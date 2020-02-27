const path = require('path');
const plugins = require('./webpack/plugins');
const loaders = require('./webpack/loaders');

module.exports = {
    entry: "./src/app",
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
        publicPath: '/',
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                    use: {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]?[hash]',
                        },
                    },
            },
            // loaders.AssetLoader,
            loaders.FontLoader
        ],
    },
    plugins: [
        plugins.HtmlWebpackPlugin
    ],
    resolve: {
        extensions: [".webpack.js",
            ".js", ".jsx"
        ],
        modules: [
            path.resolve(__dirname, 'src'),
            'node_modules',
        ],
    },
    devServer: {
        host: '0.0.0.0',
        watchContentBase: true,
        contentBase: '.',
        hot: true,
        inline: false,
        disableHostCheck: true,
        historyApiFallback: true,
        watchOptions: {
            ignored: [
                path.resolve(__dirname, 'node_modules'),
            ]
        }
    }
};
