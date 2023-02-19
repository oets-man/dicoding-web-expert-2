const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
const ImageminMozjpeg = require('imagemin-mozjpeg');
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');

// belum tertarik pakai ini
// const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = {
	entry: {
		app: path.resolve(__dirname, 'src/index.js'),
		sw: path.resolve(__dirname, 'src/sw.js'),
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				exclude: /components/,
				use: [
					// Creates `style` nodes from JS strings
					'style-loader',
					// Translates CSS into CommonJS
					'css-loader',
					// Compiles Sass to CSS
					'sass-loader',
				],
			},
			{
				// component
				test: /\.css$/i,
				include: /components/,
				use: ['to-string-loader', 'css-loader'],
			},
			{
				// component
				test: /\.html$/i,
				include: /components/,
				use: ['to-string-loader', 'html-loader'],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: path.resolve(__dirname, 'src/templates/index.html'),
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, 'src/public/'),
					to: path.resolve(__dirname, 'dist/'),
				},
			],
		}),
		new CleanWebpackPlugin(),
		new ImageminWebpackPlugin({
			plugins: [
				ImageminMozjpeg({
					quality: 75,
					progressive: true,
				}),
			],
		}),
		new ImageminWebpWebpackPlugin({
			config: [
				{
					test: /\.(jpe?g|png)/,
					options: {
						quality: 50,
					},
				},
			],
			overrideExtension: true,
		}),
	],
};
