const SendResponse = require("./SendResponse");

const ErrorFunction = (err,req,res,next) => {
  res.status(500).send(SendResponse(false, "Found Error"));
};

module.exports = ErrorFunction;