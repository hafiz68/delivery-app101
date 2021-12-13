const db = require("../config/db");
const {Sequelize} = require('sequelize');

const Shipments = db.define("Shipments", {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true
    },
    ShipmentCode: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
    destination: {
        type: Sequelize.STRING(500),
        allowNull: false
      },
    receivingDate: {
      type: Sequelize.DATE,
      allowNull: false
    },
    charges: {
        type: Sequelize.FLOAT,
        allowNull: true
    },
    bookingDate:{
        type: Sequelize.DATE,
        allowNull: false
    },
    shipMethod:{
        type: Sequelize.ENUM('By air', 'BY road', 'By train'),
        allowNull: false
    }
  });

  module.exports= Shipments;

  