const User = require("./user.model");
const UserService = require("./user.service");
const Quiz = require("./quiz.model");
const QuizService = require("./quiz.service");

exports.UserService = UserService(User);
exports.QuizService = QuizService(Quiz);
