const defaultConfig = require('@10up/scripts/config/webpack.config');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; // eslint-disable-line
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	...defaultConfig,
	output: {
		chunkFilename: '[name].bundle.js',
		publicPath: '/wp-content/themes/performance/dist/',
	},
	plugins: [...defaultConfig.plugins, new CleanWebpackPlugin(), new BundleAnalyzerPlugin()],
};
