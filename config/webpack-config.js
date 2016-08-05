/**
 * Created by robertzzy on 03/07/16.
 */


// MAIN DEPENDENCIES
import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

import Clean from 'clean-webpack-plugin';

// base app dir
let root_dir = path.resolve(__dirname, '..');
let output = path.join(root_dir, 'build');
let cleanDirectories = ['build'];


module.exports = (option)=> {
	let processVars = {
		'process.env': {}
	};
	processVars['DEBUG'] = option.debug;
	processVars['LOCAL'] = !option.all;

	let commonPlugin = [];
	let appPlugin = [];
	let loginPlugin = [];
	if (option.app) {
		appPlugin.push(
			new HtmlWebpackPlugin({
				title:'T.N.T 管理',
				filename: 'index.html',
				template: path.join(root_dir, 'template/index.html')
			}),
			new webpack.HotModuleReplacementPlugin(),
			new Clean(cleanDirectories, root_dir),
			new ExtractTextPlugin("app.css"))
	} else if (option.login) {
		loginPlugin.push(
			new HtmlWebpackPlugin({
				title:'T.N.T 登录',
				filename: 'index.html',
				template: path.join(root_dir, 'template/index.html')
			}),
			new webpack.HotModuleReplacementPlugin(),
			new Clean(cleanDirectories, root_dir),
			new ExtractTextPlugin("login.css"))
	} else if (option.all) {
		cleanDirectories = ['static', 'template'];
		processVars['process.env'].NODE_ENV = JSON.stringify('production');
		processVars['process.env'].BROWSER = JSON.stringify(true);
		commonPlugin.push(
			new webpack.optimize.UglifyJsPlugin({
				compress: {
					warnings: false
				}
			}),
			new webpack.PrefetchPlugin("react"),
			new webpack.optimize.OccurrenceOrderPlugin(true),
			new webpack.optimize.DedupePlugin());
		appPlugin.push(
			new HtmlWebpackPlugin({
				title:'T.N.T 管理',
				filename: '../template/app.html',
				template: path.join(root_dir, 'template/index.html')
			}),
			new Clean(cleanDirectories, path.join(path.join(root_dir, '..'), 'tnt-backend/app')),
			new ExtractTextPlugin("[hash].css"));
		loginPlugin.push(
			new HtmlWebpackPlugin({
				title:'T.N.T 登录',
				filename: '../template/login.html',
				template: path.join(root_dir, 'template/index.html')
			}),
			new ExtractTextPlugin("[hash].css"))
	}

	commonPlugin.push(new webpack.DefinePlugin(processVars));
	Array.prototype.push.apply(appPlugin, commonPlugin);
	Array.prototype.push.apply(loginPlugin, commonPlugin);


	if(option.app){
		return {
			context: path.join(root_dir, 'app'),
			entry: [
				'./app',
				'webpack/hot/dev-server',
				'webpack-dev-server/client?http://localhost:3002'
			],
			output:{
				publicPath: "http://localhost:3002/assets/",
				path: path.join(output, 'app'),
				filename: 'app.js'
			},
			resolve: {
				extensions: ['', '.js', '.jsx']
			},
			module: {
				loaders: [
					{ test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: [/node_modules/, /__tests__/] },
					{ test: /\.sass$/, loader: ExtractTextPlugin.extract('style', 'css!sass?indentedSyntax')},
					{ test: /\.json$/, loader: 'json'}
				]
			},
			devtool:"#inline-source-map",
			devServer: {
				contentBase: path.join(output, 'app')
			},
			plugins:appPlugin
		}
	}else if(option.login){
		return {
			context: path.join(root_dir, 'login'),
			entry: [
				'./login',
				'webpack/hot/dev-server',
				'webpack-dev-server/client?http://localhost:3002'
			],
			output:{
				publicPath: "http://localhost:3002/assets/",
				path: path.join(output, 'login'),
				filename: 'login.js'
			},
			resolve: {
				extensions: ['', '.js', '.jsx']
			},
			module: {
				loaders: [
					{ test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: [/node_modules/, /__tests__/] },
					{ test: /\.sass$/, loader: ExtractTextPlugin.extract('style', 'css!sass?indentedSyntax')},
					{ test: /\.json$/, loader: 'json'}
				]
			},
			devtool:"#inline-source-map",
			devServer: {
				contentBase: path.join(output, 'login')
			},
			plugins:loginPlugin
		}
	}else if(option.all){
		let assetOutput = path.join(path.join(root_dir,'..'), 'tnt-backend/app/static');
		return[{
			context: path.join(root_dir, 'app'),
			entry: './app',
			output:{
				path: assetOutput,
				filename: '[hash].js'
			},
			resolve: {
				extensions: ['', '.js', '.jsx']
			},
			module: {
				loaders: [
					{ test: /\.js?$/, loader: 'babel', exclude: [/node_modules/, /__tests__/] },
					{ test: /\.sass$/, loader: ExtractTextPlugin.extract('style', 'css!sass?indentedSyntax')},
					{ test: /\.json$/, loader: 'json'}
				]
			},
			plugins:appPlugin
		},{
			context: path.join(root_dir, 'login'),
			entry:'./login',
			output:{
				path: assetOutput,
				filename: '[hash].js'
			},
			resolve: {
				extensions: ['', '.js', '.jsx']
			},
			module: {
				loaders: [
					{ test: /\.js?$/, loader: 'babel', exclude: [/node_modules/, /__tests__/] },
					{ test: /\.sass$/, loader: ExtractTextPlugin.extract('style', 'css!sass?indentedSyntax')},
					{ test: /\.json$/, loader: 'json'}
				]
			},
			plugins:loginPlugin
		}]
	}
};