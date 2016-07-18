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
	if(option.app){
		return {
			context: path.join(root_dir, 'app'),
			entry: './app',
			output:{
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
			plugins:[
				new HtmlWebpackPlugin({
					filename: 'index.html',
					template: path.join(root_dir,'template/index.html')
				}),
				new Clean(cleanDirectories, root_dir),
				new ExtractTextPlugin("app.css")
			]
		}
	}else if(option.login){
		return {
			context: path.join(root_dir, 'login'),
			entry: './login',
			output:{
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
			plugins:[
				new HtmlWebpackPlugin({
					filename: 'index.html',
					template: path.join(root_dir,'template/index.html')
				}),
				new Clean(cleanDirectories, root_dir),
				new ExtractTextPlugin("login.css")
			]
		}
	}else if(option.prod){
		cleanDirectories = ['static', 'template'];
		let assetOutput = path.join(path.join(root_dir,'..'), 'tnt-backend/static');
		return[{
			context: path.join(root_dir, 'app'),
			entry: './app',
			output:{
				path: assetOutput,
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
			plugins:[
				new HtmlWebpackPlugin({
					filename: '../template/app.html',
					template: path.join(root_dir,'template/index.html')
				}),
				new Clean(cleanDirectories, path.join(path.join(root_dir,'..'), 'tnt-backend')),
				new ExtractTextPlugin("app.css")
			]
		},{
			context: path.join(root_dir, 'login'),
			entry: './login',
			output:{
				path: assetOutput,
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
			plugins:[
				new HtmlWebpackPlugin({
					filename: '../template/login.html',
					template: path.join(root_dir,'template/index.html')
				}),
				new ExtractTextPlugin("login.css")
			]
		}]
	}

	//let serverConfig = {
	//	context: path.join(root_dir, 'server'),
	//	entry: './server',
	//	output:{
	//		path: output,
	//		filename: 'server.js'
	//	},
	//	devtool:"#inline-source-map",
	//	resolve: {
	//		extensions: ['', '.js']
	//	},
	//	target: 'node',
	//	module: {
	//		loaders: [
	//			{ test: /\.js$/, loader: 'babel', exclude: [/node_modules/, /__tests__/] },
	//			{ test: /\.json$/, loader: 'json'}
	//		]
	//	}
	//};
	//if(prod) {
	//	configs.push(serverConfig)
	//}
	return configs

};