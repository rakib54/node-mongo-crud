const mongoose = require('mongoose');
const validator = require('validator');

// create user schema
const userSchema = mongoose.Schema({
  firstName: {
    type: 'string',
    required: [true, "Please Provide your firstName"]
  },
  lastName: {
    type: 'string',
    required: [true, "Please Provide your lastName"]
  },
  email: {
    type: 'string',
    required: [true, "Please Provide your email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid Email"]
  },
  phoneNumber: {
    type: 'string',
    required: [true, "Please Provide your phoneNumber"]
  },
  block: {
    type: Boolean,
    default: false,
  },
  createdTime: {
    type: Date,
    default: Date.now(),
  },
  updatedTime: {
    type: Date,
    default: Date.now(),
  }
});

const user = mongoose.model("users", userSchema)

module.exports = user;