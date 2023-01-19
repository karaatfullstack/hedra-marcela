const Sequelize = require("sequelize");
const db = require("../db");

const Task = db.define("task", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  isComplete: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Task;
