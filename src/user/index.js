const User = require("./user.model");
const UserService = require("./user.service");

exports.UserService = UserService(User);
