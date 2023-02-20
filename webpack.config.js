const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');
//const ESLintPlugin = require('eslint-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
	mode: 'development',
	entry: {
		index: './src/index.js',
	},
	devtool: 'inline-source-map',
	devServer: {
		allowedHosts: ['.preview.csb.app', 'localhost'],
		// .preview.csb.app is the domain for CodeSandbox.io
		static: './dist',
		port: 'auto',
		client: {
			logging: 'none',
		},
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'What shows up in the browser tab',
			template: './src/index.html',
			//favicon: path.resolve(__dirname, '../icons/favicon.ico'),
		}),
		//new BundleAnalyzerPlugin({
		//	analyzerPort: 'auto',
		//	defaultSizes: 'stat',
		//}),
		new DuplicatePackageCheckerPlugin(),
		//new ESLintPlugin(),
		new CircularDependencyPlugin({
			// exclude detection of files based on a RegExp
			exclude: /a\.js|node_modules/,
			// include specific files based on a RegExp
			include: /dir/,
			// add errors to webpack instead of warnings
			failOnError: true,
			// allow import cycles that include an asyncronous import,
			// e.g. via import(/* webpackMode: "weak" */ './file.js')
			allowAsyncCycles: false,
			// set the current working directory for displaying module paths
			cwd: process.cwd(),
		}),
		new DashboardPlugin({
			port: 'auto',
		}),
	],
	optimization: {
		runtimeChunk: 'single',
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.js$/,
				enforce: 'pre',
				use: [
					{
						loader: 'source-map-loader',
						options: {
							filterSourceMappingUrl: (url, resourcePath) => {
								if (/broker-source-map-url\.js$/i.test(url)) {
									return false;
								}

								if (
									/keep-source-mapping-url\.js$/i.test(resourcePath)
								) {
									return 'skip';
								}

								return true;
							},
						},
					},
				],
			},
		],
	},
};
