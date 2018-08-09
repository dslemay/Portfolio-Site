const babelOptions = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: ['emotion', '@babel/plugin-proposal-class-properties'],
};

module.exports = require('babel-jest').createTransformer(babelOptions);
