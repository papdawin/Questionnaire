const express = require("express")
const apiRouter = express.Router()

apiRouter.get("/",(req,res)=>{
    res.send("asd")
})

apiRouter.use("/auth",require("./authRouter"))

module.exports=apiRouter