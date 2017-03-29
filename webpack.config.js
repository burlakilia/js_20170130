var path = require('path');

module.exports = {
  entry: './src/blocks/app/app.js',

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'app.js'
  },

  module: {

    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]

  }


};