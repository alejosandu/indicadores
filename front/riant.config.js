const { join } = require('path');

// if (process.env.NODE_ENV === 'development') {
//   process.stdout.isTTY = false;
// }

module.exports = {
  alias: {
    '~': join(__dirname, 'src')
  },

  babelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css'
      },
      'fix-import-imports'
    ],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    'babel-plugin-transform-jsx-class',
    'babel-plugin-transform-jsx-condition'
  ],

  chainWebpack(chainedConfig, env) {
    if (env === 'production') {
      // 兼容ie9
      // chainedConfig
      //   .entry('main')
      //   .prepend(require.resolve('react-app-polyfill/stable'))
      //   .prepend(require.resolve('react-app-polyfill/ie9'));

      // 移除 console.log
      chainedConfig.optimization.minimizer('TerserPlugin').init(plugin => {
        plugin.options.terserOptions.compress.pure_funcs = ['console.log'];
        return plugin;
      });

      // 移除文件 hash
      // chainedConfig.output
      //   .filename('static/js/[name].js')
      //   .chunkFilename('static/js/[name].js');
      // chainedConfig
      //   .plugin('MiniCssExtractPlugin')
      //   .init((plugin) => {
      //     plugin.options.filename = 'static/css/[name].css';
      //     plugin.options.chunkFilename = 'static/css/[name].chunk.css';
      //     return plugin;
      //   });
    }

    // code splitting
    // if (env !== 'test') {
    //   chainedConfig
    //     .optimization.splitChunks({
    //       cacheGroups: {
    //         vendors: {
    //           name: `chunk-vendors`,
    //           test: /[\\/]node_modules[\\/]/,
    //           priority: -10,
    //           chunks: 'initial'
    //         },
    //         common: {
    //           name: `chunk-common`,
    //           minChunks: 2,
    //           priority: -20,
    //           chunks: 'initial',
    //           reuseExistingChunk: true
    //         }
    //       }
    //     });
    //   chainedConfig
    //     .plugin('HtmlWebpackPlugin')
    //     .init((plugin) => {
    //       plugin.options.chunks = ['chunk-vendors', 'chunk-common', 'main'];
    //       return plugin;
    //     });
    // }
  }
};
