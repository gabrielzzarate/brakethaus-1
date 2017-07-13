module.exports = {

    entry: "./src",

    output: {
        filename: "./server/app.js"
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                include: __dirname,
                query: {
                    presets: ['react-hmre','es2015', 'stage-0', 'react'],
                    plugins: ['transform-decorators-legacy']
                }
            }
        ],
    },

    resolve: {
        extensions: [".js", ".jsx"]
    },

    watch: false
};
