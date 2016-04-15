var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var StyleLintPlugin = require('stylelint-webpack-plugin')

module.exports =
  { devtool: 'cheap-module-eval-source-map'
  , devServer:
    { contentBase: 'src/'
    , stats: { chunkModules: false, assets: false }
    }
  , entry:
    [ 'webpack-dev-server/client?http://localhost:8080'
    , path.join(__dirname, 'src/index.js')
    ]
  , output:
    { path: path.resolve(__dirname, 'build')
    , filename: 'bundle.js'
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
        , loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]!postcss-loader!sass-loader')
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
    [ new ExtractTextPlugin('style.css')
    , new StyleLintPlugin
      (
        { configFile: '.stylelintrc'
        , files: '**/*.css'
        }
      )
    ]
  , postcss: [ require('autoprefixer') ]
  }
