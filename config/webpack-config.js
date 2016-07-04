/**
 * Created by robertzzy on 03/07/16.
 */
// MAIN DEPENDENCIES
import path from 'path';
import webpack from 'webpack';

// base app dir
let root_dir = path.resolve(__dirname, '..');

// common configs
let config = {
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		//preLoaders: [
		//  {
		//    test: /\.js$/,
		//    exclude: /node_modules/,
		//    loader: 'eslint-loader'
		//  }
		//]
	}
};