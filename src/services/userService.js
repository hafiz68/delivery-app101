const {Users} = require('../models');
const {Sequelize} = require('sequelize');
const createUser = async(user) => {
    try {
        const createdUser = await Users.create(user);
        if(!createdUser) return {error: {message: "Something went wrong, try again", code: 500}};
        return {createdUser: createdUser};
    } catch (error) {
        console.log(error);
        return {error: {message: "Something went wrong, try again", code: 500}};
    }
};
const updateUser = async({ userName, userEmail, userPassword, role, phoneNo, birthDate, address }, id) => {
    try {
        const updatedUser = await Users.update( {userName : userName,
            phoneNo : phoneNo,
            birthDate : birthDate,
           address : address}, {where: { id}});
        if(!updatedUser) return {error: {message: "Something went wrong, try again", code: 500}};
        console.log(updatedUser);
        return {updatedUser: updatedUser};
    } catch (error) {
        console.log(error);
        return {error: {message: "Something went wrong, try again", code: 500}};
    }
};
const updateUserPass = async(userPassword, id) => {
    try {
        const updatedUser = await Users.update( 
           {userPassword: userPassword} , {where: { id}});
        if(!updatedUser) return {error: {message: "Something went wrong, try again", code: 500}};
        console.log(updatedUser);
        return {updatedUser: updatedUser};
    } catch (error) {
        console.log(error);
        return {error: {message: "Something went wrong, try again", code: 500}};
    }
};

const getUserByEmail = async(email)=>{
    try{
        let user = await Users.findOne({where:{userEmail:{ [Sequelize.Op.iLike]:email}}});
         return  {user:user};
    } catch(error){
        console.log(error);
        return {error: {message: "Something went wrong, try again", code: 500}};
    }
    
};
const getUsers = async()=>{
    try{
        let users = await Users.findAll({where:{active: true}});
        
         return  {users};
    } catch(error){
        console.log(error);
        return {error: {message: "Something went wrong, try again", code: 500}};
    }
    
};
const getUserById = async(id)=>{
    try{
        let user = await Users.findOne({ where: {id, active: true} } );
         return  {user:user};
    } catch(error){
        console.log(error);
        return {error: {message: "Something went wrong, try again", code: 500}};
    }
    
};
const deleteUser = async(id)=>{
    try{
        let user = await Users.update({active: false , deleteat: new Date()},{where:{id}});
         return  {Message:"User deleted successfully"};
    } catch(error){
        console.log(error);
        return {error: {message: "Something went wrong, try again", code: 500}};
    }
    
};
const loginUpdate = async(id)=>{
    let active = false;
    // return { message: "True" }
    try{
        console.log("yes")
        // let user = await Users.update({active: true},{where:{id:id}});
        let user = await Users.update({ active: true }, { where: { id } } )
         return  {user};
    } catch(error){
        console.log(error);
        return {error: {message: error.message, code: 500}};
    }
    
};
const destroyUser = async(id)=>{
    try{
        let user = await Users.destroy({where:{id}});
         return  {Message:"User deleted successfully"};
    } catch(error){
        console.log(error);
        return {error: {message: "Something went wrong, try again", code: 500}};
    }
    
};
const verifyEmailUpdate = async(id)=>{
    try{
        let user = await Users.update({verify: true},{where:{id}});
         return  {user};
    } catch(error){
        console.log(error);
        return {error: {message: "Something went wrong, try again", code: 500}};
    }
    
};

module.exports = {
    createUser,
    getUserByEmail,
    updateUser, 
    getUsers,
    getUserById,
    deleteUser,
    destroyUser,
    loginUpdate,
    verifyEmailUpdate
,
updateUserPass
}