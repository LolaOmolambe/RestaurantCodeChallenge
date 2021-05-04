const express = require("express");

const Logger = require("./loaders/logger");

async function startServer() {
  const app = express();

  await require("./loaders").expressApp(app);
  const PORT = process.env.PORT || 3000;

  app
    .listen(PORT, () => {
      Logger.info(`
      ################################################
      🛡️  Server listening on port: ${PORT} 🛡️
      ################################################
    `);
    })
    .on("error", (err) => {
      Logger.error(err);
      process.exit(1);
    });
}

startServer();
