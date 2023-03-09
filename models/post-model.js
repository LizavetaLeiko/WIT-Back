const { Schema, model } = require("mongoose");

const PostSchema = new Schema({
  userId: { type: String, required: true, ref: 'UserData'},
  date: { type: String, default: ''},
  header: { type: String, default: ''},
  content: { type: String, default: ''},
  file: { type: String, default: ''},
  likes: { type: String, default: ''},
  isFixed: { type: Boolean, default: false}
});

module.exports = model("Post", PostSchema);
