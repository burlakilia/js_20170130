const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/blocks/app/app.js',

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'app.js',
  },

  module: {

    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      options: { presets: ['es2015'] },


    }],

  },


};

