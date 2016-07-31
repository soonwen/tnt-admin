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

let cleanDirectories = ['build'];


module.exports = (option)=> {
	let processVars = {
		'process.env': {}
	};
	processVars['DEBUG'] = option.debug;
	processVars['LOCAL'] = option.local;

	let output = option.local ? path.join(root_dir, 'build') : path.join(path.join(root_dir,'..'), 'tnt-backend/app/static');
	let appPlugin = [];

	if(option.local){
		appPlugin.push(
				new HtmlWebpackPlugin({
					filename: 'index.html',
					template: path.join(root_dir, 'template/index.html')
				}),
				new Clean(cleanDirectories, root_dir),
				new ExtractTextPlugin("app.css"))
	}else{
		cleanDirectories = ['static', 'template'];
		if(option.debug){
			processVars['process.env'].NODE_ENV = JSON.stringify('production');
			appPlugin.push(
					new webpack.optimize.UglifyJsPlugin({
						compress: {
							warnings: false
						}
					}),
					new webpack.PrefetchPlugin("react"),
					new webpack.optimize.OccurrenceOrderPlugin(true),
					new webpack.optimize.DedupePlugin());
		}
		processVars['process.env'].BROWSER = JSON.stringify(true);
		appPlugin.push(
				new HtmlWebpackPlugin({
					filename: '../template/app.html',
					template: path.join(root_dir, 'template/index.html')
				}),
				new Clean(cleanDirectories, path.join(path.join(root_dir, '..'), 'tnt-backend/app')),
				new ExtractTextPlugin("[hash].css"));
	}

	appPlugin.push(new webpack.DefinePlugin(processVars));


	if(option.local){
		return {
			context: root_dir,
			entry: './app',
			output:{
				path: output,
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
	}else {
		return{
			context: root_dir,
			entry: './app',
			output:{
				path: output,
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
		}
	}
};