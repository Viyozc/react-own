
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackDevServer = require('webpack-dev-server')
process.env.NODE_ENV = 'development'
module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: [
    path.join(__dirname, './src')
  ],
  output: {
    path: path.join(__dirname, '/dist'),
    chunkFilename: '[hash:8].chunk.js',
    publicPath: '/',
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      'babel-runtime': path.dirname(
        require.resolve('babel-runtime/package.json')
      )
    },
    extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ],
        include: path.join(__dirname, 'src')
      },

      {
        // oneOf: [
          // {
        // test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
        test: /\.svg$/,
        loader: 'file-loader',
        options: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]'
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new HtmlWebpackPlugin({
      inject: true,
      DEV: true,
      publicPath: './public',
      template: path.join(__dirname, '/public/index.html')
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'common',
          chunks: 'all'
        }
      }
    }
  }
  // devServer: {
  //   inline: true,
  //   hot: true,
  //   contentBase: path.join(__dirname, '/'),
  //   stats: {
  //     timings: true,
  //     assets: false,
  //     modules: false,
  //     chunks: false
  //   },
  //   headers: {
  //     'Access-Control-Allow-Origin': '*'
  //   }
  // }
}
