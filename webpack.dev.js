const { merge } = require("webpack-merge");
const common = require("./webpack.config.js")

module.exports = merge(common, {
    mode: "development",
    devServer: {
        static: "./src"
    },
    devtool: "inline-source-map",
    watchOptions: {
        poll: 500
    }
})