const db = require("../config/db");
const {Sequelize} = require('sequelize');

const Users = db.define("Users", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV1,
    primaryKey: true
},
    userEmail: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
    userPassword: {
        type: Sequelize.STRING(500),
        allowNull: false
      },
    userName: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
      role: {
      type: Sequelize.ENUM('Customer', 'Admin', 'Employee'),
      allowNull: false
    },
    phoneNo: {
        type: Sequelize.STRING(20),
        allowNull: true
    },
    birthDate:{
        type: Sequelize.DATE,
        allowNull: true
    },
    active: {
      type: Sequelize.BOOLEAN,
      defaultValue: true
    },
    deleteat: {
      type: Sequelize.DATE,
      defaultValue: null
    },
    verify: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    address:{
        type: Sequelize.STRING,
        allowNull: true
    }
  });

  module.exports= Users;

  