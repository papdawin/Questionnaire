const express = require("express");
const router = express.Router();

const isLoggedIn = (req, res, next) => {
    req.user
        ? next()
        : res
              .status(401)
              .render("auth/unauthenticated.ejs", { user: req.user });
};

const isAdmin = (req, res, next) => {
    req.user.admin
        ? next()
        : res
              .status(401)
              .render("auth/unauthenticated.ejs", { user: req.user });
};

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

module.exports = router;
