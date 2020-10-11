const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    postbody: {
        required: true,
        type: String,
    },
},
    {
        timestamps: true,

});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;