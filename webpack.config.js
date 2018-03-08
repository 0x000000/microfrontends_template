const path = require('path');
const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  entry: {
    vendor: [
      "vue",
      "vuex",
      "vue-class-component",
      "vue-router"
    ],
    application: path.join(__dirname, 'apps/web/frontend/application.ts')
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.join(__dirname, 'public/assets')
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'vue-template-loader',
            options: {
              scoped: true,
              transformToRequire: {
                img: 'src'
              }
            }
          }
        ]
      },
      {
        test: /\.scss/,
        loader: 'sass-loader',
        options: {
          sourceMap: true
        }
      },
      {
        enforce: 'post',
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }
        })
      },
      {
        test: /\.(ico|png|svg|jpg|gif)$/,
        loader: 'file-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.css', '.scss', '.html'],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: Infinity,
    }),
    new ExtractTextPlugin('application.[contenthash].css'),
    new ManifestPlugin({
      fileName: path.join(__dirname, 'public/assets.json'),
      basePath: '/assets/',
      reduce: (manifest, {name, path}) => {
        manifest[name] = {target: path};
        return manifest;
      },
    }),
    new WebpackCleanupPlugin()
  ],
  watchOptions: {
    ignored: /node_modules/,
  },
  devtool: 'inline-source-map',
};
