const path = require('path');
const ManifestPlugin = require('webpack-manifest-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');


module.exports = {
  entry: {
    application: path.join(__dirname, 'apps/web/frontend/application.ts')
  },
  output: {
    filename: '[name].[hash].js',
    path: path.join(__dirname, 'public/assets')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'source-map-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(ico|png|svg|jpg|gif)$/,
        loader: "file-loader",
        options: {
          name: '[name].[ext]'
        }
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.css', '.scss'],
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  plugins: [
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
