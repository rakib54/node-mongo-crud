const express = require("express");
const UserCreate = require("../Controllers/userControllers");
const allUser = require("../Controllers/get_allUsers");
const getSingleUser = require("../Controllers/getSingleUser");
const updateUserData = require("../Controllers/updateUser");
const deleteUserData = require("../Controllers/deleteUserData");
const router = express.Router();


// create
router.post("/create", UserCreate);
router.get("/allUsers",allUser);
router.get("/allUsers/:id",getSingleUser);
router.patch("/allUsers/update/:id",updateUserData);
router.delete("/allUsers/delete/:id",deleteUserData);

module.exports = router;