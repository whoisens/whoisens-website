const zlib = require('zlib');
const CompressionWebpackPlugin = require('compression-webpack-plugin');

if (process.env.NODE_ENV === 'production') {
  module.exports.productionSourceMap = false;
  module.exports.configureWebpack = {
    plugins: [
      new CompressionWebpackPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        minRatio: 1,
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
}
