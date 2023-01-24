const userModel  = require("../Model/userModel");
const SendResponse = require("../Helper/SendResponse");

const getSingleUser = (req,res,next) => {
  try{
    userModel.findById(req.params.id, (err,data) => {
      if(!err){
        res.status(201).send(SendResponse(true,"Successful", data));
      }
      else {
        res.status(404).send(SendResponse(false, "user Not found"));
      }
    })
  }catch(err){
    next(err);
  }
}

module.exports = getSingleUser;