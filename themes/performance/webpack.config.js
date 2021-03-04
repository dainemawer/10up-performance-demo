const defaultConfig = require('@10up/scripts/config/webpack.config');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; // eslint-disable-line

module.exports = {
	...defaultConfig,
	output: {
		chunkFilename: '[name].bundle.js',
		publicPath: '/wp-content/themes/performance/dist/',
	},
	plugins: [...defaultConfig.plugins, new BundleAnalyzerPlugin()],
};
