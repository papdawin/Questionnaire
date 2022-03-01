const express = require("express");
const router = express.Router();

const isLoggedIn = (req, res, next) => {
    req.user
        ? next()
        : res.sendStatus(401).json({ msg: "Not authenticated >:c" });
};

router.get("/", (req, res) => {
    res.render("index.ejs");
});

router.get("/signup", (req, res) => {
    res.render("auth/signup.ejs");
});

router.get("/signin", (req, res) => {
    res.render("auth/signin.ejs");
});

router.get("/profile", isLoggedIn, (req, res) => {
    res.render("auth/profile.ejs", { user: req.user });
});

module.exports = router;
