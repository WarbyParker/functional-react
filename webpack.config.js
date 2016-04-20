var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var StyleLintPlugin = require('stylelint-webpack-plugin')

module.exports = function (options) {
  return { devtool: options.dev ? 'cheap-module-eval-source-map' : 'hidden-source-map'
  , devServer:
    { contentBase: 'src/'
    , stats: { chunkModules: false, assets: false }
    }
  , entry:
    { web: path.join(__dirname, 'src/index.js')
    , typography: path.join(__dirname, 'src/components/Typography/index.js')
    , buttons: path.join(__dirname, 'src/components/Buttons/index.js')
    }
  , output:
    { path: path.resolve(__dirname, 'build')
    , filename: '[name]-bundle.js'
    , publicPath: '/static/'
    }
  , module:
    { preLoaders:
      [
        { test: /\.jsx?$/
        , loader: 'eslint-loader'
        , exclude: /node_modules/
        }
      ]
    , loaders:
      [
        { test: /\.jsx?$/
        , loader: 'babel'
        , exclude: /node_modules/
        }
      ,
        { test: /\.s?css$/
        , loader: ExtractTextPlugin.extract
          ( 'style-loader'
          , 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]!sass-loader!postcss-loader?parser=postcss-scss'
          )
        , exclude: [/node_modules/]
        }
      ,
        { test: /\.elm$/
        , loader: 'elm-webpack'
        , exclude: [/elm-stuff/, /node_modules/]
        }
      ]
      , noParse: /\.elm$/
    }
  , resolve:
    { modules:
      [ path.resolve('./src')
      , 'node_modules'
      ]
    , extensions: ['', '.js', '.jsx', '.elm']
    }
  , plugins:
    [ new ExtractTextPlugin('styles.css')
    , new webpack.optimize.CommonsChunkPlugin('commons')
    , new StyleLintPlugin({ configFile: '.stylelintrc' })
    , new webpack.LoaderOptionsPlugin({ minimize: true })
    ]
  , postcss: [ require('autoprefixer') ]
  }
}
