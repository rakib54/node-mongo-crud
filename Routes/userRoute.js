const express = require("express");
const UserCreate = require("../Controllers/userControllers");
const router = express.Router();


// create
router.post("/create", UserCreate);

module.exports = router;