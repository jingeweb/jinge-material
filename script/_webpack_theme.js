const path = require('path');
const fs = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

function getGitHash() {
  const output = require('child_process').execSync('git log -n 1');
  const m = output.toString().match(/commit\s+([a-f0-9]+)/);
  return m[1].substring(0, 10);
}

module.exports = function getWebpackBuildThemeConfig(themesDir, isProdMode, noCompress) {
  const gitHash = isProdMode ? getGitHash() : '';

  const themesEntry = Object.fromEntries(fs.readdirSync(themesDir).filter(f => {
    return f.endsWith('.scss');
  }).map(file => {
    return [
      file.substr(0, file.length - 5),
      path.join(themesDir, file)
    ];
  }));

  return {
    mode: !isProdMode || noCompress ? 'development' : 'production',
    entry: themesEntry,
    devtool: false,
    resolve: {
      extensions: ['.scss', '.js']
    },
    output: {
      filename: 'theme.[name].css.js',
      path: path.resolve(__dirname, '../docs')
    },
    module: {
      rules: [{
        test: /\.scss$/,
        parser: {
          node: false
        },
        use: [{
          loader: MiniCssExtractPlugin.loader
        }, 'css-loader', {
          loader: 'sass-loader',
          options: {
            sourceMap: false,
            sassOptions: {
              includePaths: [path.resolve(__dirname, '../')]
            }
          }
        }]
      }]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: `theme.[name].${isProdMode ? `${gitHash}.min.` : ''}css`
      })
    ]
  };
};
