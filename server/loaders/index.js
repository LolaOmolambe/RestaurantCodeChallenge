const expressLoader = require("./expressLoader");
const Logger = require("./logger");

exports.expressApp = async (expressApp) => {
  await expressLoader.expressApp(expressApp);

  Logger.info("✌️ Express loaded");
};

