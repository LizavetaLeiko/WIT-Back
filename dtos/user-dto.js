module.exports = class UserDto {
  email;
  id;
  isActivated;
  nickname;
  userDataId;

  constructor(model) {
      this.email = model.email;
      this.id = model._id;
      this.isActivated = model.isActivated;
      this.likedFilms = model.likedFilms;
      this.nickname = model.nickname;
      this.userDataId = model.userDataId;
  }
}