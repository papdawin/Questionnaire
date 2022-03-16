const express = require("express");
const router = express.Router();
const uuid = require("uuid");
const bcrypt = require("bcrypt");
const { UserService } = require("../src/user");
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

module.exports = router;
