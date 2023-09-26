const path = require("path");

module.exports = {
	entry: {
		bundle: "./src/page/MainPageManager.ts",
	},
	output: {
		path: path.join(__dirname, "public", "js"),
		filename: "[name].js",
		library: "alkana",
	},
	resolve: {
		extensions: [".ts", ".js"],
	},
	devServer: {
		static: {
			directory: path.join(__dirname, "public"),
		},
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				loader: "ts-loader",
			},
		],
	},
};
