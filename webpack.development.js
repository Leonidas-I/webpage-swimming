const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
    mode: "development",
    devtool: "inline-cheap-module-source-map",
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.s[a|c]ss$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true,
                            plugins: function () {
                                return [require("autoprefixer")];
                            },
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpe?g)$/i,
                loader: "file-loader",
                options: {
                    name: "[path][name].[ext]",
                },
            },
        ],
    },
});
