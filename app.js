const express = require('express');
const cors = require('cors');
const app = express();
require("dotenv").config()

const SendResponse = require("./Helper/SendResponse")
const Error = require("./Helper/ErrorFunction")


// application configuration setup
app.use(express.json());
app.use(cors());

// Api request handling
app.get('/', async(req,res) => {
  res.send(SendResponse(true, "App is working!"));
})

// error handling
app.use(Error);

// Handle undefined routes
app.get('*', async(req,res) => {
  res.send(SendResponse(false, "Undefined Routes"));
})

module.exports = app;