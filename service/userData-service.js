const UserDataModel = require("../models/userData-model")

class UserDataService {

  async setUserData(id, name, speciality, bDay, location, description, photoLink ) {
    const body = {
      name,
      speciality,
      bDay,
      location,
      description,
      photoLink,
    }
    const user = await UserDataModel.findOneAndUpdate({ _id: id }, { ...body }, { new: true });
    return user;
  }

  async getUserData(id) {
    const user = await UserDataModel.findOne({_id: id});
    return user
  }
}

module.exports = new UserDataService();
