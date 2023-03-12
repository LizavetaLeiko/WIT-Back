const PostModel = require("../models/post-model");
const uuid = require("uuid");
const PostDto = require("../dtos/post-dto");

class PostService {

  async createPost(userId, header, content, file, likes, isFixed) {
    const date = new Date();
    const body = {
      userId,
      date: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
      header,
      content,
      file,
      likes,
      isFixed,
    }
    const post = await PostModel.create({...body});
    return post;
  }

  async getPost(postId) {
    const post = await PostModel.findOne({ _id: postId });
    return post;
  }
  
  async getAllUsersPosts(userId) {
    const posts = await PostModel.find({userId: userId});
    return posts;
  }

  async getAllPosts() {
    const posts = await PostModel.find();
    return posts;
  }
  
  async likePost(postId){
    const post = await PostModel.findOneAndUpdate({_id: postId }, { $set: {likes: likes++}});
  }

  async unLikePost(postId){
    const post = await PostModel.findOneAndUpdate({_id: postId }, { $set: {likes: likes--}});
  }
}

module.exports = new PostService();
