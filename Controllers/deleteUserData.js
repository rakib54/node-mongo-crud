const userModel = require("../Model/userModel");
const SendResponse = require("../Helper/SendResponse");

const deleteUserData = async(req,res,next) => {
  try {
    const {id} = req.params;
    userModel.findByIdAndDelete({_id:id},(err) => {
      if(!err){
        res.status(202).send(SendResponse(true, "data deleted Successfully"))
      }
      else {
        res.status(500).send(SendResponse(true, "Found an error from backend"))
      }
    })
  }catch(err){
    next(err);
  }
};

module.exports = deleteUserData;