const userModel = require('../Model/userModel');
const SendResponse = require('../Helper/SendResponse');

const createUser = (req, res, next) => {
  try {
    userModel.create(
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
      },
      (err, userData) => {
        if(err){
          if(err.code === 11000){
            res.status(409)
            .send(SendResponse(false, "Email is Already Exists!"))
          }
          else {
            res.status(500).send(SendResponse(false, "Error From Backend"))
          }
        }
        else {
          res.status(201).send(SendResponse(true, "user created Successfully", {
            _id: userData._id,
            firstName:userData.firstName,
            lastName:userData.lastName,
            email:userData.email,
            phoneNumber:userData.phoneNumber,
            block:userData.block,
            createdTime:userData.createdTime,
            updatedTime:userData.updatedTime,

          }))
        }
      }
    )
  } catch (error) {
    next(error);
  }
}

module.exports = createUser;