const path = require('path');
// const TerserPlugin = require('terser-webpack-plugin');
const { jingeLoader, JingeWebpackPlugin } = require('jinge/compiler');
const { routerAlias } = require('jinge-router/compiler');
const { jingeMaterialAlias, jingeMaterialFieldBase } = require('../compiler');
const { __r, BASE_HREF } = require('./_util');

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
      chunk: {
        // 如果使用了 webpack 的 dynamic import 来拆分代码，需要配置此参数为 true。默认为 false。
        multiple: true,
        // 将 chunk 信息写入到指定的文件，方便加载到浏览器里配合 ResourceLoader 使用。默认为 null，即不写入文件。
        writeInfo: 'chunk.json',
        // 是否将 webpack 抽取的模块共用的公共 chunk 信息也写入 writeInfo 指定的文件。默认为 false。
        // includeCommon: false
      },
      style: {
        extract: true,
      },
      i18n: {
        translateDir: __r('site/translate'),
        defaultLocale: 'zh_cn',
      },
    }),
  ];

  return {
    mode: !isProdMode || noCompress ? 'development' : 'production',
    // optimization: {
    //   minimizer: [
    //     new TerserPlugin({
    //       terserOptions: {
    //         output: {
    //           comments: false,
    //         },
    //       },
    //       extractComments: false,
    //     }),
    //   ],
    // },
    target: 'web',
    node: false,
    entry: __r('site/app/entry/index.js'),
    output: {
      filename: `main${isProdMode ? '.[contenthash].min' : ''}.js`,
      chunkFilename: `${isProdMode ? '[contenthash].min' : '[name]'}.js`,
      path: __r('docs'),
      publicPath: BASE_HREF,
    },
    devtool: !isProdMode ? 'source-map' : false,
    resolve: {
      extensions: ['.js', '.scss', '.html'],
    },
    plugins,
    module: {
      rules: [
        {
          test: /\.(js|html)$/,
          parser: {
            node: false,
          },
          oneOf: [
            {
              resourceQuery: /example/,
              use: path.resolve(__dirname, '../compiler/loader.js'),
            },
            {
              use: {
                loader: jingeLoader,
                options: {
                  componentAlias: [routerAlias, jingeMaterialSrcAlias],
                  componentBase: jingeMaterialFieldBase,
                },
              },
            },
          ],
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
