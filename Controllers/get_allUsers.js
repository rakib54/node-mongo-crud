const userModel = require('../Model/userModel');
const SendResponse = require('../Helper/SendResponse');

const allUser = (req, res, next) => {
  try {
    userModel.find((err, data) => {
      if (!err) {
        res.status(200).send(SendResponse(true,"Get all user Successfully", data));
      }
      else {
        console.log('Error')
      }
    })

  } catch (error) {
    next(error);
  }
}

module.exports = allUser;