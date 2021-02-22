module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./'],
        alias: {
          '@app': './src',
          '@assets': './src/assets',
          '@components': './src/components',
          '@interfaces': './src/interfaces',
          '@hooks': './src/hooks',
          '@constants': './src/constants',
        },
      },
    ],
  ],
};
