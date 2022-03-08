let mongoose = require("mongoose");
let Schema = mongoose.Schema;

const userSchema = new Schema({
    id: String,
    email: String,
    firstName: String,
    lastName: String,
    profilePhoto: String,
    password: String,
    admin: { type: Boolean, default: false },
    lastVisited: { type: Date, default: new Date() },
});

module.exports = mongoose.model("user", userSchema, "user");
