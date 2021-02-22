module.exports = {
  root: true,
  extends: '@react-native-community',
  'import/no-unresolved': ['error', { ignore: ['@app', '@assets', '@components', '@interfaces', '@hooks', '@constants'] }], // ignore module import
  'react/jsx-closing-bracket-location': 'off', // let prettier formats the code
};
