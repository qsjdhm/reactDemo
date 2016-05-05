var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
module.exports = {
    //entry: {
    //    page1: path.resolve(__dirname, './src/js/index.jsx'),
    //        //支持数组形式，将加载数组中的所有模块，但以最后一个模块作为输出
    //    page2: path.resolve(__dirname, './src/js/hello.jsx')
    //},
    //output: {
    //    path: path.resolve(__dirname, './dist/js'),
    //    filename: "[name].bundle.js"
    //},

	entry: path.resolve(__dirname, './src/js/index.jsx'),
	output: {
		path: path.resolve(__dirname, './dist'),
        publicPath: "./",
        hash: true,
		filename: 'js/[name].entry.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				query: {presets: ['es2015','react']}
			},
			{
				test: /\.jsx?$/,
				//exclude: /(node_modules|bower_components)/,
				loader: 'babel',
				query: {presets: ['es2015','react']}
			},
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
            },
            {
                test: /\.scss|sass/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                // 超过limit的图片会让 url-loader处理
                loader: 'url-loader?limit=10&name=img/[hash:8].[name].[ext]'
            }

		]
	},
    plugins: [
        new ExtractTextPlugin("css/[name].css", {allChunks: true}),
        new HtmlWebpackPlugin({
            title: 'my test'
        })
    ]



};


