const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const passport = require("passport");
app.use(passport.initialize())
const cookieParser = require("cookie-parser");
var session = require('express-session')

app.set('trust proxy', 1)
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

require("./strategies/JWTStrategy")
require("./strategies/LocalStrategy")
require("./authenticate")

app.use(passport.initialize());
app.use(cookieParser("jhdshhds884hfhhs-ew6dhjd"));

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

app.post("/", async (req,res)=>{
    console.log(req.body)
})

app.use("/api",require("./routes/indexRouter"))

app.listen(3001, () => console.log("Server online"));
