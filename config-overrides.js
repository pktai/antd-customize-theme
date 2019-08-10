const { override, fixBabelImports, addLessLoader } = require('customize-cra');
const antdTheme = require('./src/config-color')
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: antdTheme
  }),

);