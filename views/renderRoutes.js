const express = require("express");
const router = express.Router();
const { isLoggedIn, isAdmin } = require("../src/middlewares/userCheck");

router.get("/", (req, res) => {
    res.render("index.ejs", { user: req.user });
});

router.get("/signup", (req, res) => {
    res.render("auth/signup.ejs", { user: req.user });
});

router.get("/signin", (req, res) => {
    res.render("auth/signin.ejs", { user: req.user });
});

router.get("/profile", isLoggedIn, (req, res) => {
    res.render("auth/profile.ejs", { user: req.user });
});

router.use(
    "/moderation",
    isLoggedIn,
    isAdmin,
    require("./moderation/moderationRoutes.js")
);

router.use("/", require("./gameplay/gameplayRoutes.js"));
router.use("/", require("./pr/prRoutes.js"));

module.exports = router;
