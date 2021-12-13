const {Sequelize} = require('sequelize');

const dotenv = require('dotenv');
dotenv.config();

// const db = {};

const sequelize = new Sequelize('dae80ub29525jp', 'yxrqrgiuosbwtb', 'edb19b0dddbd94c84a7d6b766d969f64388570fcd75ac88bdb63060d92759635', {
    host: 'ec2-18-214-214-252.compute-1.amazonaws.com',
    dialect: 'postgres',
    logging: false,
    port: 5432,
    URI :'postgres://yxrqrgiuosbwtb:edb19b0dddbd94c84a7d6b766d969f64388570fcd75ac88bdb63060d92759635@ec2-18-214-214-252.compute-1.amazonaws.com:5432/dae80ub29525jp',
    pool:{
        max: 5,
        min:0,
        acqire: 30000,
        idle: 10000
    }
});

module.exports = sequelize;
