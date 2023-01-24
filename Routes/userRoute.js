const express = require("express");
const UserCreate = require("../Controllers/userControllers");
const allUser = require("../Controllers/get_allUsers");
const getSingleUser = require("../Controllers/getSingleUser");
const router = express.Router();


// create
router.post("/create", UserCreate);
router.get("/allUsers",allUser);
router.get("/allUsers/:id",getSingleUser);

module.exports = router;