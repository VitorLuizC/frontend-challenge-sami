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
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        use: 'babel-loader',
      },
    ],
  },
});

module.exports = createConfiguration;
