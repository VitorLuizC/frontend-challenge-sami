// @ts-check

const path = require('path');

/**
 * Webpack configuration factory.
 * @type {import('webpack').ConfigurationFactory}
 */
const createConfiguration = (_, { mode = 'development' }) => ({
  mode,
  entry: './src/main.tsx',
  output: {
    path: path.resolve(__dirname, './dist'),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        use: {
          loader: 'babel-loader',
          options: require('./.babelrc.js'),
        },
        include: [path.resolve(__dirname, './src')],
        exclude: /node_modules/,
      },
    ],
  },
});

module.exports = createConfiguration;
