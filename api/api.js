const express = require("express");
const router = express.Router();
const uuid = require("uuid");
const bcrypt = require("bcrypt");
const { UserService } = require("../src/user");
const passport = require("passport");

router.get("/logout", (req, res) => {
    req.session.destroy(() => {
        res.clearCookie("connect.sid");
        res.redirect("/");
    });
});

router.post("/signup", async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    //implement passCheck

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

module.exports = router;
