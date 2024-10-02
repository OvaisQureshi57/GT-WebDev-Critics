const path = require("path");

module.exports = {
    entry: "./src/App.js",
    output: {
        path: path.resolve(__dirname, './bundlePackage'),
        filename: "app.bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
};