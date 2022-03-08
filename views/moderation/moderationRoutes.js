const express = require("express");
const router = express.Router();
const { UserService } = require("../../src/user");

router.get("/user", async (req, res) => {
    const users = await UserService.getUsers();
    res.render("moderation/user.ejs", {
        user: req.user,
        users,
    });
});

router.get("/quiz", (req, res) => {
    res.render("moderation/quiz.ejs", {
        user: req.user,
    });
});

module.exports = router;
