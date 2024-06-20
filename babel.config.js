module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'], // Adjust this to your project's structure
        alias: {
          '@components': './src/components',
          '@screens': './src/screens',
          '@utils': './src/utils',
          '@assets': './src/assets',
          '@pages': './src/pages',
          '@store': './src/store',
          '@core': './src/core',
          '@common': './src/common',
          '@styles': './src/styles',
          '@models': './src/models',
          '@layout': './src/layout',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
