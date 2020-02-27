

const AssetLoader = {
  test: /\.(jpe?g|png|gif|svg)$/i,
  use: {
    loader: 'file-loader',
    options: {
      name: '[path][name].[ext]?[hash]',
    },
  },
}

const FontLoader = {
  test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
  use: [{
    loader: 'file-loader',
    options: {
      name: '[name].[ext]',
      outputPath: 'fonts/'
    }
  }]
}

module.exports = {
  AssetLoader,
  FontLoader
}