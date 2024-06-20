const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const defaultConfig = getDefaultConfig(__dirname);

const config = {
  resolver: {
    sourceExts: [
      ...defaultConfig.resolver.sourceExts,
      'jsx',
      'js',
      'ts',
      'tsx',
    ],
    extraNodeModules: {
      '@components': `${__dirname}/src/components`,
      '@screens': `${__dirname}/src/screens`,
      '@utils': `${__dirname}/src/utils`,
      '@assets': `${__dirname}/src/assets`,
      '@pages': `${__dirname}/src/pages`,
      '@store': `${__dirname}/src/store`,
      '@core': `${__dirname}/src/core`,
      '@common': `${__dirname}/src/common`,
      '@styles': `${__dirname}/src/styles`,
      '@models': `${__dirname}/src/models`,
      '@layout': `${__dirname}/src/layout`,
    },
  },
};

module.exports = mergeConfig(defaultConfig, config);
