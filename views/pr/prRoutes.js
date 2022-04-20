const express = require("express");
const prRouter = express.Router();

prRouter.get("/impressum", async (req, res) => {
    res.render("pr/impressum.ejs", { user: req.user });
});

prRouter.get("/about", async (req, res) => {
    res.render("pr/about.ejs", { user: req.user });
});

prRouter.get("/sitemap", async (req, res) => {
    res.render("pr/sitemap.ejs", { user: req.user });
});

prRouter.get("/contact", async (req, res) => {
    res.render("pr/contact.ejs", { user: req.user });
});

module.exports = prRouter;
