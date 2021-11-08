const path = require('path');
const fs = require('fs');
const CleanCSS = require('clean-css');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

class RemoveThemeJSPlugin {
  constructor(options) {
    this.compress = options.compress;
  }

  apply(compiler) {
    const needCompress = this.compress;
    compiler.hooks.emit.tap('REMOVE_THEME_JS_PLUGIN', function (compilation) {
      const assets = compilation.assets;
      Object.keys(assets).forEach((file) => {
        if (file.endsWith('.css.js')) {
          delete assets[file];
        } else if (needCompress && file.endsWith('.css')) {
          const _src = new CleanCSS().minify(assets[file].source()).styles;
          assets[file] = {
            source: () => _src,
            size: () => _src.length,
          };
        }
      });
    });
  }
}

module.exports = function getWebpackBuildThemeConfig(themesDir, isProdMode, noCompress) {
  const themesEntry = Object.fromEntries(
    fs
      .readdirSync(themesDir)
      .filter((f) => {
        return f.endsWith('.scss');
      })
      .map((file) => {
        return [file.substr(0, file.length - 5), path.join(themesDir, file)];
      }),
  );

  return {
    mode: 'development',
    entry: themesEntry,
    devtool: false,
    resolve: {
      extensions: ['.scss', '.js'],
    },
    output: {
      filename: '[name].css.js',
      path: path.resolve(__dirname, '../docs/themes'),
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          parser: {
            node: false,
          },
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            'css-loader',
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
    plugins: [
      new RemoveThemeJSPlugin({
        compress: isProdMode && !noCompress,
      }),
      new MiniCssExtractPlugin({
        filename: `[name].${isProdMode ? '[contenthash].min.' : ''}css`,
      }),
    ],
  };
};
