// @ts-check

const path = require('path');
const dotenv = require('dotenv');
const { DefinePlugin } = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

dotenv.config();

/**
 * The `webpack-dev-server` port.
 */
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3001;

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
  devServer: {
    port: PORT,
    compress: true,
    contentBase: path.resolve(__dirname, './dist'),
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        use: {
          loader: 'babel-loader',
          options: require('./.babelrc.js'),
        },
        test: /\.tsx?$/i,
        include: [path.resolve(__dirname, './src')],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, './public/index.ejs'),
      filename: 'index.html',
      minify: mode !== 'development',
    }),
    new DefinePlugin({
      'process.env.TOKEN': process.env.TOKEN,
    }),
  ],
});

module.exports = createConfiguration;
