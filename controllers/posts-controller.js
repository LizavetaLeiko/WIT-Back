const PostService = require("../service/post-service");

class PostsController {

  async createPost(req, res, next) {
    try {
      const { userId, header, content, file, likes, isFixed } = req.body;
      const post = await PostService.createPost(userId, header, content, file, likes, isFixed);
      return res.json(post);
    } catch (e) {
      next(e);
    }
  }

  async getPost(req, res, next) {
    try {
      const { id } = req.params;
      console.log(req.params)
      const post = await PostService.getPost(id);
      return res.json(post);
    } catch (e) {
      next(e);
    }
  }

  async getAllUsersPosts(req, res, next) {
    try {
      const { id } = req.params;
      const posts = await PostService.getAllUsersPosts(id);
      return res.json(posts);
    } catch (e) {
      next(e);
    }
  }

  async getAllPosts(req, res, next) {
    try {
      const posts = await PostService.getAllPosts();
      return res.json(posts);
    } catch (e) {
      next(e);
    }
  }

}

module.exports = new PostsController();