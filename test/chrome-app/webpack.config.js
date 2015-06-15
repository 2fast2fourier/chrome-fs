'use strict';

module.exports = {
  devtool: 'source-map',
  entry: './test/chrome-app/index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.js$/,
        exclude: [
          /node_modules/
        ],
        loaders: [
          'babel-loader?optional=runtime'
        ]
      }
    ]
  },
  bail: true
};
