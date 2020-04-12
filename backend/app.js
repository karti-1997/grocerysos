const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//const questionRoutes = require('./routes/questions');
//const userRoutes = require('./routes/user')

const app = express();

mongoose.connect("mongodb+srv://ramu:1N506AvErUjZvWFh@cluster0-1mx5h.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
.then(() => {
  console.log('Connected to database');
})
.catch(() => {
  console.log('Connection failed');
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded( {extended: false} ));
app.use((req,res,next) => {
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Headers",
  "Origin, X-Requested-with, Content-Type, Accept"
  );
  res.setHeader("Access-Control-Allow-Methods",
  "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});
//app.use("/api/user",userRoutes);
//app.use("/api/questions",questionRoutes);

module.exports = app;
