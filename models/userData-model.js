const { Schema, model } = require("mongoose");

const UserDataSchema = new Schema({
  userId: { type: String, required: true, ref: 'User'},
  name: { type: String, default: ''},
  speciality: { type: String, default: ''},
  bDay: { type: String, default: ''},
  location: { type: String, default: ''},
  description: { type: String, default: ''},
});

module.exports = model("UserData", UserDataSchema);
