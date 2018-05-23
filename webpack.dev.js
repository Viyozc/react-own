
const path = require('path')
const autoprefixer = require('autoprefixer')
module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [path.join(__dirname, './src')],
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
        use: ['babel-loader', {
          options: {
            cacheDirectory: true
          }
        }],
        include: path.join(__dirname, './src'),
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ],
        include: path.join(__dirname, './src')
      },

      {

        oneOf: [
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
            loader: require.resolve('url-loader'),
            options: {
              limit: 10000,
              name: 'static/media/[name].[hash:8].[ext]'
            }
          }
          // {
          //   test: /\.(js|jsx|mjs)$/,
          //   include: path.join(__dirname, 'src'),
          //   loader: require.resolve('babel-loader'),
          //   options: {
          //       // @remove-on-eject-begin
          //     babelrc: false,
          //     presets: [require.resolve('babel-preset-react-app')],
          //     cacheDirectory: true
          //   }
          // },
          // {
          //   test: /\.css$/,
          //   use: [
          //     require.resolve('style-loader'),
          //     {
          //       loader: require.resolve('css-loader'),
          //       options: {
          //         importLoaders: 1
          //       }
          //     },
          //     {
          //       loader: require.resolve('postcss-loader'),
          //       options: {
          //         ident: 'postcss',
          //         plugins: () => [
          //           require('postcss-flexbugs-fixes'),
          //           autoprefixer({
          //             browsers: [
          //               '>1%',
          //               'last 4 versions',
          //               'Firefox ESR',
          //               'not ie < 9' // React doesn't support IE8 anyway
          //             ],
          //             flexbox: 'no-2009'
          //           })
          //         ]
          //       }
          //     }
          //   ]
          // },
          // {
          //   exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
          //   loader: require.resolve('file-loader'),
          //   options: {
          //     name: 'static/media/[name].[hash:8].[ext]'
          //   }
          // }
        ]
      }
    ]
  },
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
}
