const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const vendorRoutes = require('./routes/vendor');
const inventoryRoutes = require('./routes/inventory');
const orderRoutes = require('./routes/order');
const app = express();

/*mongoose.connect("mongodb+srv://ramu:1N506AvErUjZvWFh@cluster0-1mx5h.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
.then(() => {
  console.log('Connected to database');
})
.catch(() => {
  console.log('Connection failed');
});*/


mongoose.connect("mongodb://localhost:27017/Grocerysos", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
.then(()=>{
  console.log('connected to database');
})
.catch(() =>{
  console.log('connection failed');
});


app.use(bodyParser.json())
app.use(bodyParser.urlencoded( {extended: false} ));
app.use((req,res,next) => {
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Headers",
  "Origin, X-Requested-with, Content-Type, Accept"
  );
  res.setHeader("Access-Control-Allow-Methods",
  "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  next();
});
app.use("/api/vendors",vendorRoutes);
app.use("/api/inventory",inventoryRoutes);
app.use("/api/order",orderRoutes);
module.exports = app;
