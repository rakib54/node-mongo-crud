const express = require('express');
const cors = require('cors');
const app = express();
require("dotenv").config()

const SendResponse = require("./Helper/SendResponse")
const Error = require("./Helper/ErrorFunction")

// import routes
const UserRoutes = require("./Routes/userRoute");


// application configuration setup
app.use(express.json());
app.use(cors());

// Api request handling
app.get('/', async(req,res) => {
  res.send(SendResponse(true, "App is working!"));
})

//using routes
app.use("/user", UserRoutes);


// error handling
app.use(Error);

// Handle undefined routes
app.get('*', async(req,res) => {
  res.send(SendResponse(false, "Undefined Routes"));
})

module.exports = app;