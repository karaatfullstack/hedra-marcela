const Sequelize = require("sequelize");
const db = require("../db");

const Property = db.define("property", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  address: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue:
      "https://www.shutterstock.com/image-vector/flats-building-vector-icon-which-260nw-1820345972.jpg",
  },
  yearBuilt: {
    type: Sequelize.INTEGER,
  },
  totalUnits: {
    type: Sequelize.INTEGER,
    validate: {
      min: 2,
    },
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Property;
