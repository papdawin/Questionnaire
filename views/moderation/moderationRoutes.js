const express = require("express");
const router = express.Router();
const { UserService, QuizService } = require("../../src/user");

router.get("/user", async (req, res) => {
    const users = await UserService.getUsers();
    res.render("moderation/user.ejs", {
        user: req.user,
        users,
    });
});

router.get("/quiz", (req, res) => {
    const quizzes = await QuizService.getQuizzes();
    res.render("moderation/quiz.ejs", {
        user: req.user,
        quizzes,
    });
});

module.exports = router;
