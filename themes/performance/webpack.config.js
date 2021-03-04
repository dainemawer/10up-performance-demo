const defaultConfig = require('@10up/scripts/config/webpack.config');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; // eslint-disable-line

module.exports = {
	...defaultConfig,
	plugins: [...defaultConfig.plugins, new BundleAnalyzerPlugin()],
};
