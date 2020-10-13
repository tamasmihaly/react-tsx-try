const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const DIST_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');

module.exports = {
	mode: 'none',
	entry: {
		app: path.join(__dirname, 'src', 'index.tsx'),
	},
	output: {
		path: DIST_DIR,
		filename: 'bundle.js',
	},
	target: 'web',
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: '/node_modules/',
			},
		],
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'index.html'),
		})
	],
};

 