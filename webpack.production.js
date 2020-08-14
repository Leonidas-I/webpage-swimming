const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "[name].[contentHash].js",
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
            minify: {
                removeAttributeQuotes: true,
                removeComments: true,
                collapseWhitespace: true,
            },
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].[contentHash].css",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.s[a|c]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: function () {
                                return [
                                    require("autoprefixer"),
                                    require("cssnano")({
                                        preset: "default",
                                    }),
                                ];
                            },
                        },
                    },
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|jpe?g)$/i,
                loader: "file-loader",
                options: {
                    name: "[contentHash].[ext]",
                    outputPath: "img",
                    // publicPath: "assets"
                },
            },
        ],
    },
});
