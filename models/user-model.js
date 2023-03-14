const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  isActivated: { type: Boolean, default: false },
  activationLink: { type: String },
  nickname: { type: String, required: true},
  userDataId: { type: String, ref: 'UserData'}
});

module.exports = model("User", UserSchema);
