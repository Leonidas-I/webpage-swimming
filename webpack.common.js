module.exports = {
    entry: {
        script: "./js/script.js",
        style: "./css/style.scss",
    },
    optimization: {
        runtimeChunk: true,
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: "html-loader",
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader",
            },
        ],
    },
};
