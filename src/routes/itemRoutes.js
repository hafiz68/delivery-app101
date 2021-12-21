const express = require ("express");
const router = express.Router();
const Itemcontrollers = require('../Controllers/itemControllers');



router.get("/item/:id" , Itemcontrollers.getItemById);
router.delete("/delitem/:id" , Itemcontrollers.delItemById);
router.put("/updateitem/:id" , Itemcontrollers.updateItem);







module.exports = router;