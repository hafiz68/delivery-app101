const {Items} = require('../models');
const authService = require('./../services/authService');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');




const getModes = async(req, res)=>{
    try{
        let modes = await Items.findAll();
         return  res.status(200).send({modes});
    } catch(error){
        console.log(error);
        return {error: {message: "Something went wrong, try again", code: 500}};
    }
    
};
const getItemById = async(req, res)=>{
    const {id} = req.params;
    try{
        let mode = await Items.findOne({where:{ id:id}});
         return  res.status(200).send({mode});
    } catch(error){
        console.log(error);
        return {error: {message: "Something went wrong, try again", code: 500}};
    }
    
};


module.exports = {
    
    getModes,
    getItemById
}