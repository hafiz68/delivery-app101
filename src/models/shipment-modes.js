const db = require("../config/db");
const {Sequelize} = require('sequelize');

const ShipmentModes = db.define("ShipmentModes", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV1,
    primaryKey: true
},
    modeName: {
        type: Sequelize.ENUM('By air', 'BY road', 'By train'),
        allowNull: false,
      },
    rate: {
        type: Sequelize.FLOAT,
        allowNull: false
      }
  });

  module.exports= ShipmentModes;

  