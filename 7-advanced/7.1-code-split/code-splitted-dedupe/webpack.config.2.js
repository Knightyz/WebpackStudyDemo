var webpack = require("webpack");
var path = require("path");
module.exports = {
    entry: "./example2.js",
    output: {
        path: path.join(__dirname, 'dist2'),
        filename: "bundle.js"
    },
	plugins: [
		new webpack.optimize.DedupePlugin()
	]
}