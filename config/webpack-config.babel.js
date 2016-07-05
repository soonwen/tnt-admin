/**
 * Created by robertzzy on 03/07/16.
 */
// MAIN DEPENDENCIES
import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import Clean from 'clean-webpack-plugin';

// base app dir
let root_dir = path.resolve(__dirname, '..');
let output = path.join(root_dir, 'build');
let cleanDirectories = ['build'];


module.exports = {
	context: path.join(root_dir, 'app'),
	entry: './app',
	output:{
		path: output,
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{ test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: [/node_modules/, /__tests__/] },
			{ test: /\.json$/, loader: 'json'}
		]
	},
	devtool:"#inline-source-map",
	devServer: {
		contentBase: output
	},
	plugins:[
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: path.join(root_dir,'template/index.html')
		}),
		new Clean(cleanDirectories, root_dir)
	]
};