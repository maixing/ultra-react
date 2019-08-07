/**
 * Created by maixing on 2017/6/12.
 */
let path = require("path");
let WebpackBar = require("webpackbar");
let CopyWebpackPlugin = require("copy-webpack-plugin");

function resolve(url) {
    return path.resolve(__dirname, "../" + url);
}

module.exports = {
	entry: {},
	module: {
		rules: [
			{
				test: /\.json$/,
				type: "javascript/auto",
				exclude: /node_modules/,
				use: {
					loader: "json-loader"
				}
			}
		]
	},
	resolve: {
		modules: [path.resolve(__dirname, "../node_modules"), path.resolve(__dirname, "../src"), __dirname],
		extensions: [".js", ".json", ".jsx", ".css", ".less"],
		alias: {
			"@": resolve("src"),
			"views":resolve("src/view")
		}
	},
	plugins: [
		new WebpackBar({
			minimal: false,
			profile: true,
			name: "任务执行进度"
		}),
		new CopyWebpackPlugin([
			{ from: path.resolve(__dirname, "../resource"), to: path.resolve(__dirname, "../dist/resource") }
		])
	]
};
