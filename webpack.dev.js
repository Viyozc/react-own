
const path = require('path')
const autoprefixer = require('autoprefixer')
module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [path.join(__dirname, './src')],
  output: {
    path: path.join(__dirname, '/dist'),
    chunkFilename: '[name].chunk.js',
    publicPath: '/',
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      'babel-runtime': path.dirname(
        require.resolve('babel-runtime/package.json')
      )
    },
    extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader', {
          options: {
            cacheDirectory: true,
          }
        }],
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/
      }, 
      {
        test: /\.css$/,
        use: [
          ['style-loader', {
            options: {
              importLoaders: 1,
            }
          }], 
          ['postcss-loader', {
            options: {
              plugins: [
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9', // React doesn't support IE8 anyway
                  ],
                  flexbox: 'no-2009',
                }),
              ]
            }
          }]
        ],
        include: path.join(__dirname, 'src')
      }
    ],
  }
}