module.exports = {
  entry: './src/blocks/app/app.js',

  output: {
    path: './public',
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