const webpack = require('webpack');
const path = require('path');

const config = {
  entry: {
    main: './app/js/app.js',
    libs: ['jquery', 'react', 'react-dom']
  },
  output: {
    path: path.resolve(__dirname, 'app/js'),
    publicPath: 'js/',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({$: "jquery", jQuery: "jquery", "window.jQuery": "jquery", React: 'react', ReactDOM: 'react-dom'}),
    new webpack.optimize.CommonsChunkPlugin({
      names: ["libs", "manifest"]
    })
    // new webpack.DefinePlugin({
    // 	'process.env': {
    // 		NODE_ENV: JSON.stringify('production')
    // 	}
    // }),
    // new webpack.optimize.UglifyJsPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, "app"),
    // compress: true,
    port: 3000,
    watchContentBase: true
    // watchOptions: {
    //   // aggregateTimeout: 2000
    //   ignored: [/scss/, /css/]
    //
    // }
  }
};

module.exports = config;
