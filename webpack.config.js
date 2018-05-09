const path = require('path');
const ManifestPlugin = require('webpack-manifest-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
  entry: {
    application: path.join(__dirname, 'apps', 'web', 'frontend', 'application.ts')
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.join(__dirname, 'public', 'assets'),
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
                img: 'src',
              }
            }
          }
        ]
      },
      {
        test: /\.scss/,
        loader: 'sass-loader',
        options: {
          sourceMap: true,
        }
      },
      {
        enforce: 'post',
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
        ]
      },
      {
        test: /\.(ico|png|svg|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          name: "[name].[hash].[ext]",
        }
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.css', '.scss', '.html'],
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].css",
    }),
    new ManifestPlugin({
      fileName: path.join(__dirname, 'public', 'assets.json'),
      basePath: path.join(path.sep, 'assets', path.sep),
      generate: (seed, files) => {
        return files.reduce((manifest, file) => {
          manifest[file.name] = {target: path.join(path.sep, 'assets', file.path)};
          return manifest;
        }, seed);
      }
    }),
    new WebpackCleanupPlugin()
  ],
  watchOptions: {
    ignored: /node_modules/,
  },
  devtool: 'inline-source-map',
};
