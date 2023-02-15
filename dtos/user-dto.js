module.exports = class UserDto {
  email;
  id;
  isActivated;
  nickname;


  constructor(model) {
      this.email = model.email;
      this.id = model._id;
      this.isActivated = model.isActivated;
      this.likedFilms = model.likedFilms;
      this.nickname = model.nickname;
  }
}