let mongoose = require("mongoose");
let Schema = mongoose.Schema;

const userSchema = new Schema({
    id: {
        type: String,
        default: null,
    },
    email: {
        type: String,
        required: [true, "enter an email"],
        unique: [true, "email already in use"],
    },
    firstName: String,
    lastName: String,
    profilePhoto: String,
    password: String,
    lastVisited: { type: Date, default: new Date() },
});

module.exports = mongoose.model("user", userSchema, "user");
