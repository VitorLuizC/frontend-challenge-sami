// @ts-check

/**
 * Babel options.
 * @type {import('@babel/core').TransformOptions}
 */
const options = {
  presets: [
    [
      '@babel/preset-env',
      {
        loose: true,
        corejs: 3,
        modules: false,
        useBuiltIns: 'usage',
      },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
};

module.exports = options;
