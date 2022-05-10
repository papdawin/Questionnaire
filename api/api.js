const express = require("express");
const router = express.Router();
const uuid = require("uuid");
const bcrypt = require("bcrypt");
const { UserService, QuizService } = require("../src/user");
const passport = require("passport");
const { isLoggedIn, isAdmin } = require("../src/middlewares/userCheck");

router.get("/logout", (req, res) => {
    req.session.destroy(() => {
        res.clearCookie("connect.sid");
        res.redirect("/");
    });
});

router.post("/signup", async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    if (await UserService.getUserByEmail({ email }))
        return res.redirect("/signup"); //err

    if (password.length < 8) return res.redirect("/signup"); //err

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        await UserService.addUser({
            id: uuid.v4(),
            email,
            firstName,
            lastName,
            password: hashedPassword,
        });
    } catch (e) {
        res.redirect("/signup");
    }
    res.redirect("/signin");
});

router.post(
    "/signin",
    passport.authenticate("local", {
        successRedirect: "/profile",
        failureRedirect: "/signin",
    })
);

router.post("/deleteuser", isLoggedIn, isAdmin, async (req, res) => {
    try {
        await UserService.deleteUserByEmail(req.body.email);
        res.send({ msg: "OK :)" });
    } catch (error) {
        res.send({ msg: error });
    }
});

router.post("/modifyuser", isLoggedIn, isAdmin, async (req, res) => {
    try {
        await UserService.toggleAdminByEmail(req.body.email);
        res.send({ msg: "OK :)" });
    } catch (error) {
        res.send({ msg: error });
    }
});

router.post("/quizsubmit", isLoggedIn, async (req, res) => {
    req.body.id = uuid.v4();
    req.body.creator = `${req.user.firstName} ${req.user.lastName}`;
    try {
        await QuizService.addQuiz(req.body);
        res.send({ msg: "OK :)", quizID: req.body.id });
    } catch (error) {
        res.send({ msg: error });
    }
});

router.post("/deletequiz", async (req, res) => {
    try {
        await QuizService.deleteQuiz(req.body.id);
        res.send({ msg: "OK :)", quizID: req.body.id });
    } catch (error) {
        res.send({ msg: error });
    }
});

// router.post("/storeattempt", async (req, res) => {
//     try {
//         await UserService.addScoreToUser(
//             req.user.id,
//             req.body.id,
//             req.body.score,
//             req.body.max
//         );
//         res.send({ msg: "OK :)" });
//     } catch (error) {
//         res.send({ msg: error });
//     }
// });

module.exports = router;
