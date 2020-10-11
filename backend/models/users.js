const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
    firstname: {type: String, required: true, trim: true},
    lastname: {type: String, required: true, trim: true},
    username: {type: String, required: true, trim: true},
    password: {type: String, required: true, trim: true},
    email: {type: String, required: true, trim: true},
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
    ]
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);