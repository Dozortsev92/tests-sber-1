const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/index.js",
	devtool: 'inline-source-map',
	output: {
		path: path.join(__dirname, "/dist"),
		filename: "bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: {
					loader: "ts-loader"
				},
			},
			{
				test: /\.jsx?$/,
				exclude: /node-modules/,
				use: {
					loader: "babel-loader"
				},
			},
			{
				test: /\.scss$/i,
				use: [
					// Creates `style` nodes from JS strings
					"style-loader",
					// Translates CSS into CommonJS
					"css-loader",
					// Compiles Sass to CSS
					"sass-loader",
				],
			},
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.jsx', '.js'],
		modules: [path.resolve(__dirname, 'src'), 'node_modules']
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html"
		})
	]
}
