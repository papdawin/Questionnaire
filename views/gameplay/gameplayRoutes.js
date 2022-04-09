const express = require("express");
const router = express.Router();
const { UserService, QuizService } = require("../../src/user");
const { isLoggedIn, isAdmin } = require("../../src/middlewares/userCheck");

router.get("/upload", isLoggedIn, async (req, res) => {
    res.render("gameplay/upload.ejs", {
        user: req.user,
    });
});

router.get("/quiz", async (req, res) => {
    const quizzes = await QuizService.getQuizzes();
    res.render("gameplay/quizList.ejs", {
        user: req.user,
        quizzes,
    });
});

router.get("/quiz/:id", async (req, res) => {
    const quiz = await QuizService.getQuizByID(req.params.id);
    res.render("gameplay/quizProperties.ejs", {
        user: req.user,
        quiz,
    });
});

router.get("/quiz/:id/:Qid", async (req, res) => {
    const question = (await QuizService.getQuizByID(req.params.id)).questions[
        req.params.Qid
    ];
    const quiz = await QuizService.getQuizByID(req.params.id);
    if (question) {
        res.render("gameplay/question.ejs", {
            user: req.user,
            question,
        });
    } else {
        res.render("gameplay/results.ejs", {
            user: req.user,
            quiz,
        });
    }
});

module.exports = router;
