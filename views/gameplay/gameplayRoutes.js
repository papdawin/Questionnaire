const express = require("express");
const router = express.Router();
//const { UserService, QuizService } = require("../../src/user");
const { isLoggedIn, isAdmin } = require("../../src/middlewares/userCheck");

router.get("/upload", isLoggedIn, async (req, res) => {
    res.render("gameplay/upload.ejs", {
        user: req.user,
    });
});

router.use("/quiz", require("./singlePlayer/gameRoutes.js"));

module.exports = router;
