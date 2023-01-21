const Sequelize = require("sequelize");

const config = {
  logging: false,
};

if (process.env.LOGGING === "true") {
  delete config.logging;
}

//https://stackoverflow.com/questions/61254851/heroku-postgres-sequelize-no-pg-hba-conf-entry-for-host
if (process.env.DATABASE_URL) {
  config.dialectOptions = {
    ssl: {
      rejectUnauthorized: false,
    },
  };
}

const db = new Sequelize(
  process.env.DATABASE_URL || {
    host: "localhost",
    port: 5432,
    database: "hedra",
    dialect: "postgres",
    username: "karacavanaugh",
    password: "admin",
    config,
  }
);

module.exports = db;
