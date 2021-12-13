const express = require ("express");
const app = express();
const cors = require ("cors");
const sequelize = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const modeRoutes = require('./routes/modesRoutes');
const shipmentroutes = require('./routes/sipmentRoutes');
const { Items, Users, Shipments, ShipmentModes } = require('./models');
app.use(cors());
app.use(express.json());
app.use("/deliveryapp", userRoutes);
app.use("/deliveryapp", modeRoutes);
app.use("/deliveryapp", shipmentroutes);

const dotenv = require('dotenv');
dotenv.config();

app.use("/", (req, res)=>{ 
    return res.send({message:"Server is listening at 192.168.0.171:5000"});
})


sequelize.sync().then((result) => {
    app.listen('delivery-app101.herokuapp.com', ()=>{
        console.log("You are on port 5000");
    });
}).catch(err => {
    console.log(err)
});