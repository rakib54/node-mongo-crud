const userModel = require("../Model/userModel");
const SendResponse = require("../Helper/SendResponse");

const updateUserData = (req, res, next) => {
  try {
    const { firstName, lastName, phoneNumber, block } = req.body;

    userModel.findByIdAndUpdate(
      req.params.id,
      {
        firstName,
        lastName,
        phoneNumber,
        block,
        updatedTime: Date.now()
      },
      { new: true },
      (err, result) => {
        if (!err && result) {
          res
            .status(200)
            .send(SendResponse(true, "Data updated successful.", result));
        } else {
          res.status(404).send(SendResponse(false, "Found an error!"))
        }
      }
    )
  } catch (err) {
    next(err);
  }
}


module.exports = updateUserData;