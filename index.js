const express = require("express");
const app = express();
require("dotenv").config();

const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");

require("./src/config/passport");
require("./src/config/local");

mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@sulis.xe6x4.mongodb.net/${process.env.DB_COLL}?retryWrites=true&w=majority`,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    },
    (err, mobject) => {
        if (err) console.log(err);
        else console.log("Mongoose ready");
    }
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine("html", require("ejs").renderFile);
app.use(express.static(__dirname + "/public"));

app.use(
    session({
        secret: "szikrit",
        resave: false,
        saveUninitialized: true,
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/", require("./views/renderRoutes"));
app.use("/api/", require("./api/api"));

app.listen(process.env.PORT, () => console.log("Server online"));
