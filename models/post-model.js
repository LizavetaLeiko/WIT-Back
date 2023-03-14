const { Schema, model } = require("mongoose");

const PostSchema = new Schema({
  userId: { type: String, required: true, ref: 'User'},
  date: { type: String, default: ''},
  header: { type: String, default: ''},
  content: { type: String, default: ''},
  file: { type: String, default: ''},
  likes: { type: [], default: []},
});

module.exports = model("Post", PostSchema);
