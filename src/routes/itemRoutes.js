const express = require ("express");
const router = express.Router();
const Itemcontrollers = require('../Controllers/itemControllers');



router.get("/item/:id" , Itemcontrollers.getItemById);






module.exports = router;