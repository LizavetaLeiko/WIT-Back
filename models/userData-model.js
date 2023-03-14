const { Schema, model } = require("mongoose");

const UserDataSchema = new Schema({
  // userId: { type: String, required: true, ref: 'User'}, // УДАЛИТЬ НАХУЙ!!!!
  name: { type: String, default: ''},
  speciality: { type: String, default: ''},
  bDay: { type: String, default: ''},
  location: { type: String, default: ''},
  description: { type: String, default: ''},
  photoLink: { type: String, default: ''}
});

module.exports = model("UserData", UserDataSchema);
