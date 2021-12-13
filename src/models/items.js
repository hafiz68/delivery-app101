const db = require("../config/db");
const {Sequelize} = require('sequelize');

const Items = db.define("Items", {
    id: {
        type: Sequelize.STRING,
        defaultValue: Sequelize.UUIDV,
        primaryKey: true
    },
    itemType: {
        type: Sequelize.ENUM('Solid', 'Fragile', 'Paper', 'Liquid'),
        allowNull: false,
      },
    itemName: {
        type: Sequelize.STRING(500),
        allowNull: false
      },
    weight: {
      type: Sequelize.FLOAT,
      allowNull: false
    },
      
  });

  module.exports= Items;

  