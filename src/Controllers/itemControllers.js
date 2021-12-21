const {Items} = require('../models');
const authService = require('./../services/authService');
const itemService = require('./../services/itemService');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');




const getItems = async(req, res)=>{
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
const updateItem = async(req, res) => {
    const {id} = req.params;
    const {itemType, itemName, weight} = req.body;
    try {
        let user = {
            itemType: itemType, 
            itemName: itemName, 
            weight: weight
        }
        const updatedUser = await Items.update( 
           user , {where: { id}});
        if(!updatedUser) return {error: {message: "Something went wrong, try again", code: 500}};
        console.log(updatedUser);
        return {updatedUser: updatedUser};
    } catch (error) {
        console.log(error);
        return {error: {message: "Something went wrong, try again", code: 500}};
    }
};

module.exports = {
    
    getItems,
    getItemById,
    delItemById,
    updateItem
}