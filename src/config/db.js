const {Sequelize} = require('sequelize');



// const db = {};

const sequelize = new Sequelize('dctid6srkf62qd', 'ogadhimkuyujkl', 'e27283a2a49b7118d1345b53a43af8a741bf62227c50611714d01f77fd03fafb', {
    host: 'ec2-54-204-128-96.compute-1.amazonaws.com',
    
    logging: false,
    
});

module.exports = sequelize;
