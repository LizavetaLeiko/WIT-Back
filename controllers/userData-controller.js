const userDataService = require("../service/userData-service");

class UserDataController {

  async setUserData(req, res, next) {
    try {
      const { id, name, speciality, bDay, location, description, photoLink} = req.body;
      const userData = await userDataService.setUserData(id, name, speciality, bDay, location, description, photoLink);
      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }

  async getUserData(req, res, next) {
    try {
      const { id } = req.params;
      const user = await userDataService.getUserData(id);
      return res.json(user);
    } catch (e) {
      next(e);
    }
  }

}

module.exports = new UserDataController();
