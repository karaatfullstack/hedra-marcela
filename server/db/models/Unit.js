const Sequelize = require("sequelize");
const db = require("../db");

const Unit = db.define("unit", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  unitType: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  isVacant: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Unit;
