const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const empSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  reEnterPassword: {
    type: String,
    required: true,
  },
  mail: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
});
module.exports = Employee = mongoose.model("Employee", empSchema);
