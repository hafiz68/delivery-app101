const {Items} = require('../models');
const authService = require('./../services/authService');
const itemService = require('./../services/itemService');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');




const getModes = async(req, res)=>{
    try{
        let Items = await Items.findAll();
         return  res.status(200).send({Items});
    } catch(error){
        console.log(error);
        return {error: {message: "Something went wrong, try again", code: 500}};
    }
    
};
const getItemById = async(req, res)=>{
    const {id} = req.params;
    try{
        let Item = await Items.findOne({where:{ id:id}});
         return  res.status(200).send({Item});
    } catch(error){
        console.log(error);
        return {error: {message: "Something went wrong, try again", code: 500}};
    }
    
};

const delItemById = async(req, res)=>{
    const {id} = req.params;
    try{
        let Item = await Items.destroy({where:{ id:id}});
         return  res.status(200).send("Item deleted");
    } catch(error){
        console.log(error);
        return {error: {message: "Something went wrong, try again", code: 500}};
    }
    
};

module.exports = {
    
    getModes,
    getItemById,
    delItemById
}