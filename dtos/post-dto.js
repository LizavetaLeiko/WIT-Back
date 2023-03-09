module.exports = class PostDto {
  userId;
  postId;
  date;
  header;
  content;
  file;
  likes;
  isFixed;


  constructor(model) {
      this.userId = model.userId;
      this.postId = model._id;
      this.date = model.date;
      this.header = model.header;
      this.content = model.content;
      this.file = model.file;
      this.likes = model.likes;
      this.isFixed = model.isFixed;
  }
}