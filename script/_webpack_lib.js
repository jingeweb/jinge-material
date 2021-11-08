const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const { jingeLoader, JingeWebpackPlugin } = require('jinge/compiler');
const { routerAlias } = require('jinge-router/compiler');
const pkg = require('../package.json');
const { jingeMaterialAlias, jingeMaterialFieldBase } = require('../compiler');
const { __r } = require('./_util');

const jingeMaterialSrcAlias = (function () {
  /**
   * 由于 site 里的代码也属于 jinge-material 仓库，
   * 所以需要修改下别名对应的 import 路径，改成具体的文件路径。
   */
  const alias = {};
  Object.keys(jingeMaterialAlias).forEach((libPath) => {
    alias[libPath.replace('jinge-material/src', path.resolve(__dirname, '../src'))] = jingeMaterialAlias[libPath];
  });
  return alias;
})();

module.exports = function getWebpackBuildMainConfig(isProdMode, noCompress) {
  const plugins = [
    new JingeWebpackPlugin({
      compress: isProdMode && !noCompress,
      // multiChunk: true,
      // writeChunkInfo: 'chunk.json',
      style: {
        extract: true,
      },
      // i18n: {
      //   translateDir: __r('site/translate'),
      //   defaultLocale: 'zh_cn'
      // }
    }),
    new webpack.BannerPlugin(`A material design ui library implemented with jinge mvvm framework for https://jinge.design
@version: ${pkg.version}
@copyright: 2020 ${pkg.author}
@license: MIT`),
  ];

  return {
    mode: 'production',
    optimization: {
      minimize: isProdMode && !noCompress,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            output: {
              comments: /@license/i,
            },
          },
          extractComments: false,
        }),
      ],
    },
    target: 'web',
    node: false,
    entry: __r('script/lib_entry.js'),
    output: {
      filename: `jinge-material${isProdMode && !noCompress ? '.min' : ''}.js`,
      path: __r('dist'),
      library: 'JingeMaterial',
      libraryTarget: 'umd',
    },
    devtool: 'source-map',
    resolve: {
      extensions: ['.js', '.scss', '.html'],
    },
    externals: {
      jinge: 'jinge',
    },
    plugins,
    module: {
      rules: [
        {
          test: /\.(js|html)$/,
          use: {
            loader: jingeLoader,
            options: {
              componentAlias: [routerAlias, jingeMaterialSrcAlias],
              componentBase: jingeMaterialFieldBase,
            },
          },
        },
        {
          test: /\.scss$/,
          parser: {
            node: false,
          },
          use: [
            {
              loader: jingeLoader,
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: false,
                sassOptions: {
                  includePaths: [path.resolve(__dirname, '../')],
                },
              },
            },
          ],
        },
      ],
    },
  };
};
