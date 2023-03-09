const UserDataModel = require("../models/userData-model")

class UserDataService {

  async setUserData(userId, name, speciality, bDay, location, description, photoLink ) {
    const body = {
      name,
      speciality,
      bDay,
      location,
      description,
      photoLink,
    }
    const user = await UserDataModel.findOneAndUpdate({ userId: userId }, { ...body }, { new: true });
    return user;
  }

  async getUserData(userId) {
    const user = await UserDataModel.findOne(userId).populate('userId');
    return user
  }
}

module.exports = new UserDataService();
