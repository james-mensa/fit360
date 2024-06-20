module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.(js)$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|react-native-exceptions))',
  ],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  coverageDirectory: './coverage/',
  coverageProvider: 'babel',
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },
};
