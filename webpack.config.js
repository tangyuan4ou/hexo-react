'use strict'

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
		'whatwg-fetch',
		'./src/index.jsx'
	],
  devSever: {
    contentBase: path.join(__dirname, 'assets'),
    compress: true,
    port: 8080,
    hot: true,
    inline: true
  },
  debug: true,
  output: {
    path: path.join(__dirname, '/assets/js/'),
    chunkFilename: '[name].chunk.js', //未被列在entry中，但是需要打包的文件配置
    filename: 'bundle.js',
    publicPath: '/js/'
  },
  module: {
		loaders: [{
				test: /\.js|.jsx$/,
				loader: 'babel'
			}, {
				test: /\.css$/,
				loader: 'style!css'
			}, {
				test: /\.(png|jpg|gif)$/,
				loader: 'url?limit=50000'
			}, {
				test: /\.scss/,
				loader: 'style!css!sass'
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)\??.*$/,
				loader: 'url-loader?name=fonts/[name].[md5:hash:hex:7].[ext]'
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new ExtractTextPlugin('assets/style.css', {
			allChunks: true
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': '"development"'
		}),
	],
	sassLoader: {
		includePaths: [path.resolve(__dirname, './src/sass/')]
	},
}
