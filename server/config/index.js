const dotenv = require("dotenv");
process.env.NODE_ENV = process.env.NODE_ENV || "development";

const envVariables = dotenv.config({ path: "./config/config.env" });

if (envVariables.error) {
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

let configVariables = {
  PORT: process.env.PORT,
  logs: {
    level: process.env.LOG_LEVEL || "silly",
  },
};
module.exports = configVariables;
