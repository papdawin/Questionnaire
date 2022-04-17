const express = require("express");
const gameRouter = express.Router();
const { UserService, QuizService } = require("../../../src/user");

// const isAtCurrentQuestion = (a) => {
//     return (req, res, next) => {
//         console.log(a);
//         next();
//     };
// };

gameRouter.get("/", async (req, res) => {
    const quizzes = await QuizService.getQuizzes();
    res.render("gameplay/quizList.ejs", {
        user: req.user,
        quizzes,
    });
});

gameRouter.get("/:id", async (req, res) => {
    //console.log(req.session.score);
    const quiz = await QuizService.getQuizByID(req.params.id);
    res.render("gameplay/quizProperties.ejs", {
        user: req.user,
        quiz,
    });
});

gameRouter.get("/:id/:Qid", async (req, res) => {
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

module.exports = gameRouter;
