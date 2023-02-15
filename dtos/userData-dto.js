module.exports = class UserDataDto {
  userId;
  name;
  speciality;
  bDay;
  location;
  description;

  constructor(model) {
      this.name = model.name;
      this.userId = model.userId;
      this.speciality = model.speciality;
      this.bDay = model.bDay;
      this.location = model.location;
      this.description = model.description;
  }
}