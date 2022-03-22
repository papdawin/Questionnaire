const express = require("express");
const router = express.Router();
const { UserService, QuizService } = require("../../src/user");
const { isLoggedIn, isAdmin } = require("../../src/middlewares/userCheck");

router.get("/upload", isLoggedIn, async (req, res) => {
    res.render("gameplay/upload.ejs", {
        user: req.user,
    });
});

router.get("/quizzes", async (req, res) => {
    const quizzes = await QuizService.getQuizzes();
    res.render("moderation/quiz.ejs", {
        user: req.user,
        quizzes,
    });
});

module.exports = router;
