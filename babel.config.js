const path = require('path');

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        alias: {
          '@components': path.resolve(__dirname, 'src/components'),
          '@assets': path.resolve(__dirname, 'src/assets'),
          '@layouts': path.resolve(__dirname, 'src/layouts'),
          '@screens': path.resolve(__dirname, 'src/screens'),
          '@utils': path.resolve(__dirname, 'src/utils'),
          '@theme': path.resolve(__dirname, 'src/theme'),
        },
      },
    ],
    'jest-hoist',
  ],
};
