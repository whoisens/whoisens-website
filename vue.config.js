const zlib = require('zlib');
const CompressionWebpackPlugin = require('compression-webpack-plugin');

// const productionGzipExtensions = ['js', 'css', 'woff2', 'json', 'html'];

module.exports = {
  chainWebpack: (config) => {
    // config.plugins.delete('prefetch');

    // if (config.plugins.has('optimize-css')) {
    //   config.plugins.delete('optimize-css')
    // }
  }
};

if (process.env.NODE_ENV === 'production') {
  module.exports.productionSourceMap = false;
  module.exports.configureWebpack = {
    plugins: [
      new CompressionWebpackPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        // test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
        minRatio: 1,
        // deleteOriginalAssets: true
      }),
      new CompressionWebpackPlugin({
        filename: '[path].br[query]',
        algorithm: 'brotliCompress',
        compressionOptions: {
          level: zlib.constants.BROTLI_MAX_QUALITY
        }
      })
    ]
  };
} else {
}
