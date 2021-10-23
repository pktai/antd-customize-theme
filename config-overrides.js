const { override, fixBabelImports, addLessLoader } = require("customize-cra");
const ModuleScopePlugin = require("react-dev-utils/ModuleScopePlugin");
const antdTheme = require("./src/config-color");
module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true,
  }),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: antdTheme,
    },
  }),
  function override(config, env) {
    config.resolve.plugins = config.resolve.plugins.filter(
      (plugin) => !(plugin instanceof ModuleScopePlugin)
    );

    return config;
  }
);
